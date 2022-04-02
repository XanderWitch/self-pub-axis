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

export default function App() {
	return (
		<div>
			<Navbar />
			<div className='mainBody'>
				<Routes>
					<Route path='/self-pub-axis' element={<HomePage />} />
					<Route
						path='/self-pub-axis/Resources'
						element={<Resources />}
					/>
					<Route
						path='/self-pub-axis/Checklist'
						element={<Checklist />}></Route>
					<Route
						path='/self-pub-axis/Update'
						element={<UpdateResource />}
					/>
				</Routes>
			</div>
			<Footer />
		</div>
	);
}
