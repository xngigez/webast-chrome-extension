// TODO: Add module docs.
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import {getToken} from '../services/storage/auth/AuthToken';
import {getItem} from '../services/storage/ChromeStorage';


export default function Init(props: any): JSX.Element {
	const navigate = useNavigate();

	useEffect(() => {
		getItem('email').then((email) => {
			if(email) {
				props.setEmail(email);

				getItem('token').then((token) => {
					if(token) {
						props.setToken(token);
		
						navigate('/dash');
					}
				});
			}

			navigate('/login');
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
