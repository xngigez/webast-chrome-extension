import './App.css';
import './App.scss';

import React from 'react';
import {createHashRouter, RouterProvider} from 'react-router-dom';

import Layout from './pages/Layout';
import Login from './pages/Login';
import Error from './pages/Error';
import Terms from './pages/Terms';


// Set up router.
const router = createHashRouter([
	{
		// Root router
		path: '/',
		element: <Layout />,
		errorElement: <Error />,
		children: [
			// Default route
			{
				element: <Login />,
				index: true
			},
			// Child route
			{
				path: 'terms',
				element: <Terms />,
				index: true
			}
		]
	}
]);

function App() {
	return (
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	);
}

export default App;
