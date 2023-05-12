// TODO: Add module docs.
import React from 'react';
import ReactDOM from 'react-dom';
import Chatbox from './components/chatbox/ChatBox';


// Create a div element to render the React component
const root = document.createElement('div');
document.body.appendChild(root);

// Render a simple React component in the root div
ReactDOM.render(
	<Chatbox />,
	root,
);
