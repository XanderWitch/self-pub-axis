import React from 'react';
import CreateResource from './Resources/CreateResource';
import ResourceCard from './Resources/ReadResources';
import ScrollToTop from './ScrollToTop';

const Resources = () => {
	return (
		<>
			<div>
				<h1>Recommended Resources</h1>
				<ResourceCard />
				<CreateResource />
			</div>
			<div class='centered-item' sx={{ mt: '3rem' }}>
				<ScrollToTop />
			</div>
		</>
	);
};

export default Resources;
