import React from 'react';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from '@mui/material';

const ReadOnlyRow = ({ data, handleEditClick, handleDeleteClick }) => {
	return (
		<tr>
			<td key={data._id}>{data.title}</td>

			<td key={data._id}>{data.creator}</td>

			<td key={data._id}>
				<Link target='_blank' rel='noopener'>
					{data.link}
				</Link>
			</td>

			<td key={data._id}>{data.category}</td>
			<td>
				<Button
					variant='contained'
					color='secondary'
					sx={{ m: 1 }}
					onClick={(event) => handleEditClick(event, data)}>
					<EditIcon fontSize='small' />
				</Button>
				<Button
					variant='contained'
					color='error'
					sx={{ m: 1 }}
					data={data}
					onClick={() => handleDeleteClick(data._id)}>
					<DeleteIcon fontSize='small' />
				</Button>
			</td>
		</tr>
	);
};

export default ReadOnlyRow;
