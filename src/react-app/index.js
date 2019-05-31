import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const root = document.createElement('div');
document.body.appendChild(root);

let key = 0;
export default function openModal() {
	ReactDOM.render(<App key={key++} />, root);
}
