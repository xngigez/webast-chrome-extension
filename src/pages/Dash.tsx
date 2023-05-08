// TODO: Module docs.
import {useState, useEffect} from 'react';
import {getAiTokens} from '../services/api/ai/Tokens';
import {getItem} from '../services/storage/ChromeStorage';

export default function Dash(): JSX.Element {
	const [authToken, setAuthToken] = useState<string>('');
	const [authEmail, setAuthEmail] = useState<string>('');
	const [aiTokens, setAiTokens] = useState<number>(0);

	useEffect(() => {
		getItem('email').then((email) => {
			setAuthEmail(email);

			getItem('token').then((token) => {
				setAuthToken(token);
			});
		});
	}, []);

	useEffect(() => {
		console.log('Dash useEffect authToken, authEmail');

		if(authToken !== '') {
			getAiTokens(authToken, authEmail).then((data: any) => {
				setAiTokens(data);
			});
		}
	}, [authToken]);

	return (
		<>
			<h1>Account</h1>

			<h2>Tokens balance.</h2>

			<p>
				{/* TODO: Add loader for fetching ai tokens */}
				Tokens: {aiTokens}, <button onClick={() => {getAiTokens(authToken, authEmail);}}>refresh</button>
			</p>
		</>
	);
}
