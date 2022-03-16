import React from 'react';
import Button from '@mui/material/Button';
import {
	Box,
	TextField,
	TableCell,
	TableRow,
	InputLabel,
	Select,
	FormControl,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import { MenuItem } from '@mui/material';

const EditableRow = ({
	editFormData,
	handleEditFormChange,
	handleSelectChange,
	handleCancelClick,
}) => {
	return (
		<TableRow>
			<TableCell>
				<TextField
					id='outlined-textarea'
					placeholder='Enter the resource title ...'
					name='title'
					value={editFormData.title}
					onChange={handleEditFormChange}></TextField>
			</TableCell>
			<TableCell>
				<TextField
					id='outlined-textarea'
					placeholder='Enter the resource link ...'
					name='link'
					sx={{ width: '50' }}
					value={editFormData.link}
					onChange={handleEditFormChange}></TextField>
			</TableCell>

			<TableCell>
				<TextField
					id='outlined-textarea'
					placeholder='Enter the resource creator ...'
					name='creator'
					value={editFormData.creator}
					onChange={handleEditFormChange}></TextField>
			</TableCell>
			<TableCell>
				<InputLabel id='category'>Category</InputLabel>
				<Select
					className='inputBoxes'
					sx={{ mr: 3 }}
					labelId='category'
					id='category'
					value={editFormData.category}
					onChange={handleSelectChange}>
					<MenuItem value='Article/Blog Post'>
						Article/Blog Post
					</MenuItem>
					<MenuItem value='Blog'>Blog</MenuItem>
					<MenuItem value='Book'>Book</MenuItem>
					<MenuItem value='Online Group or Forum'>
						Online Group or Forum
					</MenuItem>
					<MenuItem value='Organization'>Organization</MenuItem>
					<MenuItem value='Podcast'>Podcast</MenuItem>
					<MenuItem value='Podcast Episode'>
						Podcast Episode
					</MenuItem>
					<MenuItem value='Social Media Site'>
						Social Media Site
					</MenuItem>
					<MenuItem value='Software'>Software</MenuItem>
					<MenuItem value='Video'>Video</MenuItem>
					<MenuItem value='Website'>Website</MenuItem>
					<MenuItem value='YouTube Channel'>
						YouTube Channel
					</MenuItem>
					<MenuItem value='Other'>Other</MenuItem>
				</Select>

				{/* <FormControl variant='filled' sx={{ mb: 3, minWidth: 150 }}>
					<InputLabel id='category'>Category</InputLabel>
					<Select
						className='inputBoxes'
						sx={{ mr: 3, width: '50' }}
						labelId='category'
						id='category'
						value={editFormData.category}
						onChange={handleEditFormChange.category}>
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
						<MenuItem key='Organization' value='Organization'>
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
				</FormControl> */}
			</TableCell>
			<TableCell>
				<Box display='flex' justifyContent='space-between'>
					<Button
						style={{ backgroundColor: 'indigo' }}
						type='submit'
						variant='contained'
						color='secondary'>
						<SaveIcon size='small' />
					</Button>
					<Button
						style={{ backgroundColor: 'darkgrey' }}
						onClick={handleCancelClick}
						size='small'
						variant='contained'
						color='error'>
						<CancelIcon size='small' />
					</Button>
				</Box>
			</TableCell>
		</TableRow>
	);
};

export default EditableRow;
