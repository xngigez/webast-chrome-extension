import {useEffect} from 'react';
import {getToken} from '../services/auth/AuthToken';
import {useNavigate} from 'react-router-dom';

export default function Init(props: any): JSX.Element {
	const navigate = useNavigate();

	// Get token from chrome storage.
	useEffect(() => {
		getToken().then((token) => {
			if(token) {
				navigate('dash');
			} else {
				navigate('login');
			}
		}).catch((error) => {
			console.log('error', error);
		});
	}, []);

	return (
		<>
			<div className="text-center pt-5">
				<h1>Loading..</h1>
				<br />
				<div className="spinner-border text-primary" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>
		</>
	);
}
