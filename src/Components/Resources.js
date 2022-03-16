import React from 'react';
import CreateResource from './Resources/CreateResource';
import ResourceCard from './Resources/ReadResources';

const Resources = () => {
	return (
		<div>
			<h1>Recommended Resources</h1>
			<ResourceCard />
			<CreateResource />
		</div>
	);
};

export default Resources;
