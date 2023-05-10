// TODO: Module docs.
import { Config } from '../../../config/Config';


type Subscription = {
	price: number,
	tokens: number,
	description: string
};

export const getSubscriptions = async (token: string, email: string): Promise<Subscription[]> => {
	// Get token from server.
	const requestOptions: any = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		redirect: 'follow',
	};

	console.log('getAiTokens, email: ', email);

	try {
		//TODO: Change to use token.
		const response = await fetch(`${Config.API_URL}/subscriptions`, requestOptions);
		const json = await response.json();

		if (!response.ok) {
			throw new Error(json.message);
		}

		if (json) {
			const subscriptions: Subscription[] = json.data;

			console.log('getSubscriptions, subscriptions:', subscriptions);
			return(subscriptions);
		}
	} catch (error: any) {
		console.log('error: ' + error.message);
	}

	return([]);
}; 
