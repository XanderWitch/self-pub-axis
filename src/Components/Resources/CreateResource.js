import axios from 'axios';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid, MenuItem } from '@mui/material';
import { Button } from '@mui/material';
import { Select } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export default function CreateResource() {
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

	function refreshPage() {
		window.location.reload(false);
	}

	function postAndRefresh() {
		postData();
		refreshPage();
	}

	return (
		<Grid
			container
			spacing={0}
			direction='column'
			alignItems='center'
			justifyContent='center'>
			<Box
				p={3}
				component='form'
				className='formBox'
				noValidate
				autoComplete='off'>
				<form>
					<h2 className='form-title'>Add a New Resource</h2>
					<TextField
						sx={{ mr: 3 }}
						className='inputBoxes'
						id='outlined-textarea'
						label='Resource Title'
						defaultValue='Resource Title'
						onChange={(e) => setTitle(e.target.value)}
					/>

					<TextField
						sx={{ mr: 3 }}
						className='inputBoxes'
						id='outlined-textarea'
						label='Resource Link'
						defaultValue='Resource Link'
						onChange={(e) => setLink(e.target.value)}
					/>

					<TextField
						sx={{ mr: 3 }}
						className='inputBoxes'
						id='outlined-textarea'
						label='Resource Creator/Author'
						defaultValue='Resource Creator/Author'
						onChange={(e) => setCreator(e.target.value)}
					/>

					<FormControl
						variant='standard'
						sx={{ minWidth: '12vw' }}>
						<InputLabel id='category'>Category</InputLabel>
						<Select
							className='inputBoxes'
							sx={{ mr: 3 }}
							labelId='category'
							id='category'
							value={category}
							onChange={(e) =>
								setCategory(e.target.value)
							}>
							<MenuItem value='Article/Blog Post'>
								Article/Blog Post
							</MenuItem>
							<MenuItem value='Blog'>Blog</MenuItem>
							<MenuItem value='Book'>Book</MenuItem>
							<MenuItem value='Online Group or Forum'>
								Online Group or Forum
							</MenuItem>
							<MenuItem value='Organization'>
								Organization
							</MenuItem>
							<MenuItem value='Podcast'>Podcast</MenuItem>
							<MenuItem value='Podcast Episode'>
								Podcast Episode
							</MenuItem>
							<MenuItem value='Social Media Site'>
								Social Media Site
							</MenuItem>
							<MenuItem value='Software'>
								Software
							</MenuItem>
							<MenuItem value='Video'>Video</MenuItem>
							<MenuItem value='Website'>Website</MenuItem>
							<MenuItem value='YouTube Channel'>
								YouTube Channel
							</MenuItem>
							<MenuItem value='Other'>Other</MenuItem>
						</Select>
					</FormControl>
					<Button
						style={{ backgroundColor: 'indigo' }}
						variant='contained'
						color='secondary'
						onClick={postAndRefresh}>
						Submit
					</Button>
				</form>
			</Box>
		</Grid>
	);
}
