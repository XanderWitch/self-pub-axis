import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function FetchNews() {
	const ENDPOINT =
		'https://crudcrud.com/api/776d23438df143b9be860123700b634d/pubResources';

	const [APIData, setAPIData] = useState([]);
	useEffect(() => {
		axios.get(ENDPOINT).then((response) => {
			console.log(response.data);
			setAPIData(response.data);
		});
	}, []);

	const updateAPIData = (_id) => {
		axios.put(`${ENDPOINT}/${_id}`, {
			title: editFormData.title,
			creator: editFormData.creator,
			link: editFormData.link,
			category: editFormData.category,
		})
			.then((res) => {
				getData();

				console.log(res);
				console.log('it works');
			})
			.catch(function (error) {
				console.log(error);
			});
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

				console.log(res);
				console.log('it works');
			})
			.catch(function (error) {
				console.log(error);
			});
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

	const [editResourceId, setEditResourceId] = useState(null);

	const handleCancelClick = () => setEditResourceId(null);

	return (
		<div className='table-responsive'>
			<div className='table-div'>
				<form onSubmit={handleEditFormSubmit}>
					<table className='table'>
						<thead>
							<tr>
								<th className='text-center'>Title</th>
								<th className='text-center'>Creator</th>
								<th className='text-center'>Link</th>
								<th className='text-center'>
									Category
								</th>
							</tr>
						</thead>
						<tbody>
							{APIData.map((data, index) => (
								<>
									{editResourceId === data._id ? (
										<EditableRow
											editFormData={
												editFormData
											}
											handleEditFormChange={
												handleEditFormChange
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
						</tbody>
					</table>
				</form>
			</div>
		</div>
	);
}
