import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { createTheme, Grid } from '@mui/material';

export default function ShowResources() {
	const ENDPOINT =
		'https://crudcrud.com/api/776d23438df143b9be860123700b634d/pubResources';

	const [APIData, setAPIData] = useState([]);
	useEffect(() => {
		axios.get(ENDPOINT).then((response) => {
			console.log(response.data);
			setAPIData(response.data);
		});
	}, []);

	function refreshPage() {
		window.location.reload(false);
	}

	const updateAPIData = (_id) => {
		axios.put(`${ENDPOINT}/${_id}`, {
			title: editFormData.title,
			creator: editFormData.creator,
			link: editFormData.link,
			category: editFormData.category,
		})
			.then((res) => {
				getData();
			})
			.catch(function (error) {
				console.log(error);
			});
		refreshPage();
	};

	const [data, setData] = useState(APIData);

	const getData = () => {
		axios.get(ENDPOINT).then((getData) => {
			setAPIData(getData.data);
		});
	};

	const handleDeleteClick = (_id) => {
		axios.delete(`${ENDPOINT}/${_id}`)
			.then((res) => {
				getData();
			})
			.catch(function (error) {
				console.log(error);
			});
		refreshPage();
	};

	const handleEditClick = (event, data) => {
		event.preventDefault();
		setEditResourceId(data._id);

		const formValues = {
			title: data.title,
			creator: data.creator,
			link: data.link,
			category: data.category,
		};

		setEditFormData(formValues);
	};

	const [editFormData, setEditFormData] = useState({
		title: '',
		creator: '',
		link: '',
		category: '',
	});

	const handleEditFormSubmit = (event) => {
		event.preventDefault();
		const editedResource = {
			_id: editResourceId,
			title: editFormData.title,
			creator: editFormData.creator,
			link: editFormData.link,
			category: editFormData.category,
		};

		updateAPIData(editResourceId);

		const newResource = [...data];
		const index = data.findIndex((data) => data._id === editResourceId);

		newResource[index] = editedResource;

		setData(newResource);
		setEditResourceId(null);
	};

	const handleEditFormChange = (event) => {
		event.preventDefault();

		const fieldName = event.target.getAttribute('name');
		const fieldValue = event.target.value;

		const newFormData = { ...editFormData };
		newFormData[fieldName] = fieldValue;

		setEditFormData(newFormData);
	};

	const handleSelectChange = (event) => {
		setEditFormData(event.target.value);
	};

	const [editResourceId, setEditResourceId] = useState(null);

	const handleCancelClick = () => setEditResourceId(null);

	return (
		<Grid
			container
			spacing={0}
			direction='column'
			alignItems='center'
			justifyContent='center'>
			<form onSubmit={handleEditFormSubmit}>
				<TableContainer className='MUItable'>
					<Table stickyHeader aria-label='sticky table'>
						<TableHead
							className='tableHeader'
							sx={{ backgroundColor: 'orange' }}>
							<TableRow>
								<TableCell
									sx={{
										backgroundColor: '#814CA7',
										color: 'white',
										width: '50%',
									}}>
									Title
								</TableCell>
								<TableCell
									sx={{
										backgroundColor: '#814CA7',
										color: 'white',
										width: '20%',
									}}>
									Creator
								</TableCell>
								<TableCell
									sx={{
										backgroundColor: '#814CA7',
										color: 'white',
										width: '12%',
									}}
									align='left'>
									Category
								</TableCell>
								<TableCell
									align='left'
									sx={{
										backgroundColor: '#814CA7',
										color: 'white',
										width: '17%',
										align: 'left',
									}}>
									Actions
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{APIData.map((data) => (
								<>
									{editResourceId === data._id ? (
										<EditableRow
											editFormData={
												editFormData
											}
											handleEditFormChange={
												handleEditFormChange
											}
											handleSelectChange={
												handleSelectChange
											}
											handleCancelClick={
												handleCancelClick
											}
										/>
									) : (
										<ReadOnlyRow
											data={data}
											handleEditClick={
												handleEditClick
											}
											handleDeleteClick={
												handleDeleteClick
											}
										/>
									)}
								</>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</form>
		</Grid>
	);
}
