// TODO: Module docs.
import { Config } from '../../config/Config';


export const getAiTokens = async (token: string): Promise<number> => {
	// Get token from server.
	const requestOptions: any = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		redirect: 'follow',
	};

	try {
		const response = await fetch(`${Config.API_URL}/tokens/user?email=johndoe@mail.com`, requestOptions);
		const json = await response.json();

		if (!response.ok) {
			throw new Error(json.message);
		}

		if (json) {
			const aiToken = json.data;

			console.log(typeof json.data);
			return(aiToken);
		}
	} catch (error: any) {
		console.log('error: ' + error.message);
	}

	return(0);
}; 
