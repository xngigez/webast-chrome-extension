import './App.css';
import './App.scss';

import React, {useEffect} from 'react';
import {useState} from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';

import Layout from './pages/Layout';
import Init from './pages/Init';
import Dash from './pages/Dash';
import Error from './pages/Error';
import Terms from './pages/Terms';

function App() {
	// Token
	const [token, setToken] = useState<string | null>(null);

	useEffect(() => {
		console.log('Log', token);
		console.debug('Debug', token);
	}, [token]);

	return (
		<React.StrictMode>
			<HashRouter >
				<Routes>
					<Route path="/" element={<Layout />} >
						<Route path="/" element={<Init setToken={setToken} />} />
						<Route path="dash" element={<Dash />} />
						<Route path="terms" element={<Terms />} />
					</Route>
					<Route path="*" element={<Error />} />
				</Routes>
			</HashRouter >
		</React.StrictMode >
	);
}

export default App;
