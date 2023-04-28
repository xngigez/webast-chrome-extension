import './App.css';
import './App.scss';

import React from 'react';
// import {createHashRouter, RouterProvider} from 'react-router-dom';
import {HashRouter, Routes, Route} from 'react-router-dom';

import Layout from './pages/Layout';
import Login from './pages/Login';
import Error from './pages/Error';


function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="login" element={<Login />}></Route>
				</Route>

				<Route path="*" element={<Error />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
