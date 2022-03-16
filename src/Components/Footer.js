import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Copyright() {
	return (
		<Typography color='white'>
			{'Copyright © '}
			Self-Publishing Axis {new Date().getFullYear()}
		</Typography>
	);
}

export default function StickyFooter() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: '100vh',
				width: '100vw',
			}}>
			<Box
				className='footer'
				component='footer'
				sx={{
					py: 3,
					mt: 'auto',
				}}>
				<Container maxWidth='sm'>
					<Typography className='footer'>
						Website Design & Development by Janell E. Robisch
					</Typography>
					<Copyright />
				</Container>
			</Box>
		</Box>
	);
}
