import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
import SPCArray from './SPCArray';

const Label = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? 'secondary' : '#fdf',
	...theme.typography.h6,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

export default function SelfPubCompanies() {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				p: 1,
				m: 1,
			}}>
			<Masonry columns={3} spacing={3}>
				{SPCArray.map((item, title, link, index) => (
					<div key={index}>
						<Label sx={{ mb: 1 }}>{item.title}</Label>
						<img
							src={`${item.img}?w=300&auto=format`}
							srcSet={`${item.img}?w=300&auto=format&dpr=2 2x`}
							alt={item.title}
							loading='lazy'
							style={{
								display: 'block',
								width: '100%',
							}}
						/>
					</div>
				))}
			</Masonry>
		</Box>
	);
}
