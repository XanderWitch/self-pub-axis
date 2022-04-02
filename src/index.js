import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
render(
	<BrowserRouter basename='/self-pub-axis/Home'>
		<App />
	</BrowserRouter>,
	rootElement
);
