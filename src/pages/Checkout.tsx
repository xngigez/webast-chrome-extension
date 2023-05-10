// TODO: Add modules docs.
import {useLocation} from 'react-router';
import {Config} from '../config/Config';


export default function Checkout(props: any): JSX.Element {
	const {subscription} = useLocation().state;
	
	const data = {
		token: props.token,
		email: props.email,
		subscription: subscription
	};

	window.open(`${Config.API_URL}/subscriptions/user?data=${encodeURIComponent(JSON.stringify(data))}`, '_blank');
	// window.open(`${Config.API_URL}/subscriptions/user?data=${encodeURIComponent(JSON.stringify({data: { token: props.token, email: props.email, subscription: subscription}}))}`, '_blank');

	// chrome.runtime.sendMessage({action: 'openPaymentPage', data: {token: props.token, email: props.email, subscription: subscription}});

	return (
		<>
			<h1>Checkout</h1>
		</>
	);
}

