import React from 'react';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from '@mui/material';

const ReadOnlyRow = ({ data, handleEditClick, handleDeleteClick }) => {
	return (
		<tr>
			<td key={data._id} className='bigCell'>
				<Link target='_blank' rel='noopener' href={data.link}>
					{data.title}
				</Link>
			</td>

			<td key={data._id}>{data.creator}</td>

			<td key={data._id}>{data.category}</td>
			<td>
				<Button
					variant='contained'
					style={{ backgroundColor: 'indigo' }}
					sx={{ m: 1 }}
					onClick={(event) => handleEditClick(event, data)}>
					<EditIcon fontSize='small' />
				</Button>
				<Button
					variant='contained'
					style={{ backgroundColor: 'darkgrey' }}
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
