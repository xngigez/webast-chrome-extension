/**
 * Layout.jsx
 * 
 * This module exports a single function component called Layout, which renders
 * 	the global layout for this app.
 */
import { Outlet } from 'react-router-dom';

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
						<a href="#/login">Login</a>
					</li>
					<li>
						<a href="#/dash">Dash</a>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	);
}
