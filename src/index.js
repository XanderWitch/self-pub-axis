import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';

import { HashRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById('root');
render(
	<Router>
		<App />
	</Router>,
	rootElement
);
