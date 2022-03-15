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

const EditableRow = ({
	editFormData,
	handleEditFormChange,
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
					placeholder='Enter the resource creator ...'
					name='creator'
					value={editFormData.creator}
					onChange={handleEditFormChange}></TextField>
			</TableCell>
			<TableCell>
				<TextField
					id='outlined-textarea'
					placeholder='Enter the resource link ...'
					name='link'
					value={editFormData.link}
					onChange={handleEditFormChange}></TextField>
			</TableCell>
			<TableCell>
				<FormControl variant='filled' sx={{ mb: 3, minWidth: 150 }}>
					<InputLabel id='category'>Category</InputLabel>
					<Select
						labelId='category'
						id='category'
						value={editFormData.category}
						onChange={handleEditFormChange.category}>
						<option value='Article'>Article/Blog Post</option>
						<option value='Blog'>Blog</option>
						<option value='Book'>Book</option>
						<option value='Group or Forum'>
							Group or Forum
						</option>
						<option value='Podcast'>Podcast</option>
						<option value='Podcast Episode'>
							Podcast Episode
						</option>
						<option value='Social Media Site'>
							Social Media Site
						</option>
						<option value='Software'>Software</option>
						<option value='Video'>Video</option>
						<option value='Website'>Website</option>
						<option value='YouTube Channel'>
							YouTube Channel
						</option>
						<option value='YouTube Channel'>Other</option>
					</Select>
				</FormControl>
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
