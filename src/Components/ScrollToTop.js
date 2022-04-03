import { useState, useEffect } from 'react';
import { Button } from '@mui/material';

const ScrollToTop = () => {
	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	return (
		<Button
			style={{ backgroundColor: 'indigo' }}
			variant='contained'
			color='secondary'
			onClick={goToTop}>
			Go to Top
		</Button>
	);
};

export default ScrollToTop;
