import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GameComponent from './components/game';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<GameComponent />
	</React.StrictMode>
);

