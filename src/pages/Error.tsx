import { useRouteError, Link } from 'react-router-dom';

export default function Error(): JSX.Element {
	const error:any = useRouteError();

	return (
		<>
			<h1>You got lost!</h1>
			<p>
				<i>Issue: {error.statusText || error.message}</i>
				<br/>
				<Link to='/'>Go to home</Link>
			</p>
		</>
	);
}
