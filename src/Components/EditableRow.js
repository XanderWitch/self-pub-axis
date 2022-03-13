import React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

const EditableRow = ({
	editFormData,
	handleEditFormChange,
	handleCancelClick,
}) => {
	return (
		<tr>
			<td>
				<input
					type='text'
					placeholder='Enter the resource title ...'
					name='title'
					value={editFormData.title}
					onChange={handleEditFormChange}></input>
			</td>
			<td>
				<input
					type='text'
					placeholder='Enter the resource creator ...'
					name='creator'
					value={editFormData.creator}
					onChange={handleEditFormChange}></input>
			</td>
			<td>
				<input
					type='link'
					placeholder='Enter the resource link ...'
					name='link'
					value={editFormData.link}
					onChange={handleEditFormChange}></input>
			</td>
			<td>
				<select
					value={editFormData.category}
					onChange={handleEditFormChange.category}>
					<option value='Article'>Article/Blog Post</option>
					<option value='Blog'>Blog</option>
					<option value='Book'>Book</option>
					<option value='Group or Forum'>Group or Forum</option>
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
				</select>
			</td>
			<td>
				<Box display='flex' justifyContent='space-between'>
					<Button
						type='submit'
						variant='contained'
						color='secondary'>
						Save
					</Button>
					<Button
						onClick={handleCancelClick}
						size='small'
						variant='contained'
						color='error'>
						<CancelIcon size='small' />
					</Button>
				</Box>
			</td>
		</tr>
	);
};

export default EditableRow;
