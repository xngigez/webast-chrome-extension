import {Config} from '../../../config/Config';

/**
 * Retrieves an AI message based on the given email and conversation.
 * @param {string} email - The email address.
 * @param {message[]} conversation - An array of messages in the conversation.
 * @returns {Promise<message>} A promise that resolves to the AI message.
 */
export const getAIMessage = async (email: string, conversation:message[]) => {
	console.log(email, conversation);

	const requestOptions: any = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			// TODO: 'Authorization': `Bearer ${token}`
		},
		body: JSON.stringify({
			'messages': conversation,
			'email': email
		}),
		redirect: 'follow',
	};

	try {
		const response = await fetch(`${Config.API_URL}/ai/chat`, requestOptions);
		const json = await response.json();

		if (!response.ok) {
			throw new Error(json.message);
		}

		return json.data;
	} catch (error: any) {
		console.log('error: ', error.message);
	}

	return {
		role: '',
		content: ''
	};
};
