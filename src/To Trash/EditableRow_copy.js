import React from 'react';
import Button from '@mui/material/Button';
import { TextField, InputLabel, Select, FormControl } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import { MenuItem } from '@mui/material';
import { TableRow, TableCell } from '@mui/material';

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
					sx={{ mr: 1 }}
					className='inputBoxes'
					id='outlined-textarea'
					label='Resource Title'
					value={editFormData.title}
					onChange={handleEditFormChange}></TextField>
			</TableCell>
			<TableCell>
				<TextField
					sx={{ mr: 1 }}
					className='inputBoxes'
					id='outlined-textarea'
					label='Resource Link'
					value={editFormData.link}
					onChange={handleEditFormChange}></TextField>
			</TableCell>
			<TableCell>
				<TextField
					sx={{ mr: 1 }}
					className='inputBoxes'
					id='outlined-textarea'
					label='Resource Creator/Author'
					value={editFormData.creator}
					onChange={handleEditFormChange}></TextField>
			</TableCell>
			<TableCell>
				<FormControl variant='standard' sx={{ minWidth: '12vw' }}>
					<InputLabel id='category'>Category</InputLabel>
					<Select
						className='inputBoxes'
						sx={{ mr: 1 }}
						labelId='category'
						id='category'
						value={editFormData.category}
						onChange={handleSelectChange}>
						<MenuItem value='Article/Blog Post'>
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
						<MenuItem value='Software'>Software</MenuItem>
						<MenuItem value='Video'>Video</MenuItem>
						<MenuItem value='Website'>Website</MenuItem>
						<MenuItem value='YouTube Channel'>
							YouTube Channel
						</MenuItem>
						<MenuItem value='Other'>Other</MenuItem>
					</Select>
				</FormControl>
			</TableCell>
			<Button
				style={{ backgroundColor: 'indigo' }}
				type='submit'
				variant='contained'
				color='secondary'>
				<SaveIcon size='small' />
			</Button>
			<Button
				style={{ backgroundColor: 'darkgrey' }}
				variant='contained'
				color='secondary'
				onClick={handleCancelClick}>
				<CancelIcon size='small' />
			</Button>
		</TableRow>
	);
};

export default EditableRow;
