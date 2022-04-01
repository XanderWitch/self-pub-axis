import React from 'react';
import { Router } from 'react-router';
import './App.css';
import './index.css';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import Resources from './Components/Resources';
import Checklist from './Components/Checklist';
import UpdateResource from './Components/Resources/UpdateResource';
import Footer from './Components/Footer';

import { Route, Routes } from 'react-router';

export default function App() {
	return (
		<div>
			<Navbar />
			<div className='mainBody'>
				<Routes>
					<Router basename={'/self-pub-axis'}>
						<Route path='/Home' element={<HomePage />} />
						<Route path='Resources' element={<Resources />} />
						<Route
							path='Checklist'
							element={<Checklist />}></Route>
						<Route
							path='Update'
							element={<UpdateResource />}
						/>
					</Router>
				</Routes>
			</div>
			<Footer />
		</div>
	);
}
