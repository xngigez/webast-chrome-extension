// TODO: Module docs.
import {useState} from 'react';
import {getAiTokens} from '../services/ai/AiTokensService';

export default function Dash(): JSX.Element {
	const [authToken, setAuthToken] = useState<string>('sample-token');
	const [aiTokens, setAiTokens] = useState<number>(0);

	//*
	getAiTokens('sample-token').then((data: any) => {
		setAiTokens(data);
	});

	return (
		<>
			<h1>Account</h1>

			<h2>Tokens balance.</h2>

			<p>
				Tokens: {aiTokens}, <button onClick={() => {getAiTokens(authToken);}}>refresh</button>
			</p>
		</>
	);
}
