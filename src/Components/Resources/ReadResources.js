import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

export default function ResourceCard() {
	const ENDPOINT =
		'https://crudcrud.com/api/776d23438df143b9be860123700b634d/pubResources';

	const [APIData, setAPIData] = useState([]);
	useEffect(() => {
		axios.get(ENDPOINT).then((response) => {
			console.log(response.data);
			setAPIData(response.data);
		});
	}, []);

	APIData.sort((a, b) => a.title.localeCompare(b.title));

	function refreshPage() {
		window.location.reload(false);
	}

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

	const setData = (data) => {
		let { _id, title, creator, category, link } = data;
		localStorage.setItem('ID', _id);
		localStorage.setItem('Title', title);
		localStorage.setItem('Creator', creator);
		localStorage.setItem('Category', category);
		localStorage.setItem('Link', link);
	};

	return (
		<div className='resourceCard'>
			{APIData.map((data, _id) => (
				<>
					<Card
						sx={{
							width: '30%',
							mr: 3,
							mb: 3,
							backgroundColor: 'white',
							color: 'indigo',
						}}>
						<Grid
							align='center'
							container
							direction='column'
							justify='center'
							alignItems='center'
							style={{ minHeight: '25vh' }}
							spacing={0}>
							<Grid item xs={3}>
								<CardContent>
									<Button
										variant='outlined'
										sx={{
											m: 1,
											mb: 3,
											backgroundColor: 'white',
										}}>
										<Link
											target='_blank'
											rel='noopener'
											href={data.link}>
											Go to {data.category}
										</Link>
									</Button>
									<Typography
										sx={{
											fontSize: '1.5em',
											fontWeight: 'bold',
										}}
										component='div'>
										{data.title}
									</Typography>
									<Typography
										sx={{
											mb: 2.5,
											fontSize: '1.25em',
											fontStyle: 'italic',
										}}
										color='text.secondary'>
										{data.creator}
									</Typography>
									<Link href='/#/Update'>
										<Button
											variant='contained'
											style={{
												backgroundColor:
													'indigo',
											}}
											sx={{ m: 1 }}
											onClick={() =>
												setData(data)
											}>
											Update
										</Button>
									</Link>
									<Button
										variant='contained'
										style={{
											backgroundColor:
												'darkgrey',
										}}
										sx={{ m: 1 }}
										data={data}
										onClick={() =>
											handleDeleteClick(
												data._id
											)
										}>
										Delete
									</Button>
								</CardContent>
							</Grid>
						</Grid>
					</Card>
				</>
			))}
		</div>
	);
}
