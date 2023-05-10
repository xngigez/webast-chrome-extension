// TODO: Module docs.
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {getAiTokens} from '../services/api/ai/Tokens';
import {getItem} from '../services/storage/ChromeStorage';
import {getSubscriptions} from '../services/api/subscriptions/Subscriptions';


type Subscription = {
	price: number,
	tokens: number,
	description: string
};

export default function Dash(): JSX.Element {
	const [authToken, setAuthToken] = useState<string>('');
	const [authEmail, setAuthEmail] = useState<string>('');
	const [aiTokens, setAiTokens] = useState<number>(0);
	const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

	useEffect(() => {
		getItem('email').then((email) => {
			setAuthEmail(email);

			getItem('token').then((token) => {
				setAuthToken(token);
			});
		});
	}, []);

	useEffect(() => {
		if (authToken) {
			getAiTokens(authToken, authEmail).then((tokens: any) => {
				setAiTokens(tokens);
			});

			getSubscriptions(authToken, authEmail).then((subscriptions) => {
				setSubscriptions(subscriptions);
				console.log('Dash, subscriptions:', subscriptions);
			});
		}
	}, [authToken]);

	return (
		<>
			<h1>Account.</h1>

			<p>
				Email: {authEmail}
			</p>

			<h2>Tokens balance.</h2>
			<p>
				{/* TODO: Add loader for fetching ai tokens */}
				Tokens: {aiTokens}, <button onClick={() => {getAiTokens(authToken, authEmail);}}>refresh</button>
			</p>

			<h2>Available Subscriptions.</h2>
			<p>
				{subscriptions.map((subscription) => (
					<li key={subscription.price}>
						${subscription.description}

						<br />

						<Link to='/checkout' state={{ subscription:subscription }} className="btn btn-primary">buy ${subscription.price}/-</Link>
					</li>
				))}
			</p>
		</>
	);
}
