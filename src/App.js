import React from 'react';
import './App.css';
import './index.css';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import Resources from './Components/Resources';
import Checklist from './Components/Checklist';
import UpdateResource from './Components/Resources/UpdateResource';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router';
import { Router } from 'react-router';

export default function App() {
	return (
		<div>
			<Navbar />
			<div className='mainBody'>
				<Router basename='/self-pub-axis'>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route
							path='/Resources'
							element={<Resources />}
						/>
						<Route
							path='/Checklist'
							element={<Checklist />}></Route>
						<Route
							path='/Update'
							element={<UpdateResource />}
						/>
					</Routes>
				</Router>
			</div>
			<Footer />
		</div>
	);
}
