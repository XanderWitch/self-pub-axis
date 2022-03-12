import React from 'react';
import './App.css';
import './index.css';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import Resources from './Components/Resources';
import Checklist from './Components/Checklist';
import { Route, Routes } from 'react-router';

export default function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='Resources' element={<Resources />} />
				<Route path='Checklist' element={<Checklist />} />
			</Routes>
		</div>
	);
}
