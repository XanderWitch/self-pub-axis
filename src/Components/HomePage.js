import React from 'react';
import SelfPubCompanies from './SelfPubCompanies';

const HomePage = () => {
	return (
		<div>
			<h1 style={{ padding: '1rem 0' }}>
				Welcome to the Self-Publishing Axis
			</h1>
			<p className='extraspace'>
				Find your way in the self publishing world with resoruces
				for all your self-publishing needs.
			</p>
			<h2>Top Self-Publishing Companies</h2>
			<SelfPubCompanies />
		</div>
	);
};

export default HomePage;
