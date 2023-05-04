/**
 * Layout.jsx
 * 
 * This module exports a single function component called Layout, which renders
 * 	the global layout for this app.
 */
import {Outlet, Link} from 'react-router-dom';

/**
 * Layout function component
 * 
 * @returns {JSX.Element} The navigation bar element.
 */
export default function Layout(): JSX.Element {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to='terms'>Terms</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	);
}
