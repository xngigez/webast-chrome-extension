// TODO: Module docs.
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {deleteToken} from '../services/auth/AuthToken';


export default function Logout(): JSX.Element {
	const navigate = useNavigate();

	useEffect(() => {
		deleteToken().then(() => {
			console.log('logout successful');
			navigate('/');
		}).catch(() => {
			console.log('logout failed');
		});
	}, []);

	return (
		<>
			<div className="text-center pt-5">
				<h1>Logging out..</h1>
				<br />
				<div className="spinner-border text-primary" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>
		</>
	);
}
