import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

export default function Resources() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				'& > :not(style)': {
					m: 2,
					width: 300,
					height: 300,
				},
			}}>
			<Paper elevation={4} />
			<Paper />
			<Paper elevation={4} />
		</Box>
	);
}
