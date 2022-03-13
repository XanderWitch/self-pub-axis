import React, { useEffect, useState } from 'react';
import AddResource from './AddResource';
import ShowResources from './ShowResources';

const Resources = () => {
	return (
		<div>
			<ShowResources />
			<AddResource />
		</div>
	);
};

export default Resources;
