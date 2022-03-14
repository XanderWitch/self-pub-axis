import axios from 'axios';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material';
import { Stack } from '@mui/material';
import { Button } from '@mui/material';
import { Select } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function AddResource() {
	const [title, setTitle] = useState('');
	const [creator, setCreator] = useState('');
	const [link, setLink] = useState('');
	const [category, setCategory] = useState('');

	const postData = () => {
		axios.post(
			'https://crudcrud.com/api/776d23438df143b9be860123700b634d/pubResources',
			{
				title,
				creator,
				link,
				category,
			}
		);
	};

	const categories = [
		'Article/Blog Post',
		'Blog',
		'Book',
		'Online Group or Forum',
		'Organization',
		'Podcast',
		'Podcast Episode',
		'Social Media Site',
		'Software',
		'Video',
		'Website',
		'YouTube Channel',
	];

	return (
		<div>
			<hr />
			<div>
				<Box
					p={3}
					component='form'
					sx={{
						'& > :not(style)': { m: 1, width: '80vw' },
						backgroundColor: 'lightgrey',
						'&:hover': {
							backgroundColor: 'white',
						},
						border: '2px solid indigo',
						maxWidth: '30%',
						display: 'flex',
						justifyContent: 'center',
						marginRight: '35%',
						marginLeft: '35%',
						marginTop: '2%',
					}}
					noValidate
					autoComplete='off'>
					<FormControl sx={{ m: 1, maxWidth: '80%' }}>
						<h2 className='form-title'>Add a New Resource</h2>
						<TextField
							sx={{ mb: 3 }}
							id='outlined-textarea'
							label='Resource Title'
							defaultValue='Resource Title'
							onChange={(e) => setTitle(e.target.value)}
						/>

						<TextField
							sx={{ mb: 3 }}
							id='outlined-textarea'
							label='Resource Creator'
							defaultValue='Resource Creator'
							onChange={(e) => setCreator(e.target.value)}
						/>
						<TextField
							sx={{ mb: 3 }}
							id='outlined-textarea'
							label='Resource Link'
							defaultValue='Resource Link'
							onChange={(e) => setLink(e.target.value)}
						/>

						<Select
							sx={{ mb: 3 }}
							id='category'
							label='Category'
							defaultValue='Category'
							onChange={(e) =>
								setCategory(e.target.value)
							}>
							<MenuItem
								key='Article/Blog Post'
								value='Article/Blog Post'>
								Article/Blog Post
							</MenuItem>
							<MenuItem key='Blog' value='Blog'>
								Blog
							</MenuItem>
							<MenuItem key='Book' value='Book'>
								Book
							</MenuItem>
							<MenuItem
								key='Online Group or Forum'
								value='Online Group or Forum'>
								Online Group or Forum
							</MenuItem>
							<MenuItem
								key='Organization'
								value='Organization'>
								Organization
							</MenuItem>
							<MenuItem key='Podcast' value='Podcast'>
								Podcast
							</MenuItem>
							<MenuItem
								key='Podcast Episode'
								value='Podcast Episode'>
								Podcast Episode
							</MenuItem>
							<MenuItem
								key='Social Media Site'
								value='Social Media Site'>
								Social Media Site
							</MenuItem>
							<MenuItem key='Software' value='Software'>
								Software
							</MenuItem>
							<MenuItem key='Video' value='Video'>
								Video
							</MenuItem>
							<MenuItem key='Website' value='Website'>
								Website
							</MenuItem>
							<MenuItem
								key='YouTube Channel'
								value='YouTube Channel'>
								YouTube Channel
							</MenuItem>
							<MenuItem key='Other' value='Other'>
								Other
							</MenuItem>
						</Select>
						<Stack spacing={2} direction='row'>
							<Button
								style={{ backgroundColor: 'indigo' }}
								variant='contained'
								color='secondary'
								onClick={postData}
								className='btn btn-secondary mt-3'>
								Submit
							</Button>
						</Stack>
					</FormControl>
				</Box>
			</div>
		</div>
	);
}
