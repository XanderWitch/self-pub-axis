import { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid, MenuItem } from '@mui/material';
import { Button } from '@mui/material';
import { Select } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useNavigate } from 'react-router';
import { Link } from '@mui/material';

export default function UpdateResource() {
	let navigate = useNavigate();
	const [id, setID] = useState(null);
	const [title, setTitle] = useState('');
	const [creator, setCreator] = useState('');
	const [link, setLink] = useState('');
	const [category, setCategory] = useState('');

	const ENDPOINT =
		'https://crudcrud.com/api/776d23438df143b9be860123700b634d/pubResources';

	const [APIData, setAPIData] = useState([]);
	useEffect(() => {
		axios.get(ENDPOINT).then((response) => {
			console.log(response.data);
			setAPIData(response.data);
		});
	}, []);

	useEffect(() => {
		setID(localStorage.getItem('ID'));
		setTitle(localStorage.getItem('Title'));
		setCreator(localStorage.getItem('Creator'));
		setCategory(localStorage.getItem('Category'));
		setLink(localStorage.getItem('Link'));
	}, []);

	const getData = () => {
		axios.get(ENDPOINT).then((getData) => {
			setAPIData(getData.data);
		});
	};

	function refreshPage() {
		window.location.reload(false);
	}

	const updateAPIData = () => {
		axios.put(`${ENDPOINT}/${id}`, {
			title,
			creator,
			link,
			category,
		})
			.then((res) => {
				getData();
			})
			.catch(function (error) {
				console.log(error);
			});
		navigate('/Resources');
	};

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
					<h2 className='form-title'>Update Resource</h2>
					<TextField
						sx={{ m: 3 }}
						className='inputBoxes2'
						id='outlined-textarea'
						label='Resource Title'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>

					<TextField
						sx={{ m: 3 }}
						className='inputBoxes2'
						id='outlined-textarea'
						label='Resource Link'
						value={link}
						onChange={(e) => setLink(e.target.value)}
					/>

					<TextField
						sx={{ m: 3 }}
						className='inputBoxes2'
						id='outlined-textarea'
						label='Resource Creator/Author'
						value={creator}
						defaultValue='Resource Creator/Author'
						onChange={(e) => setCreator(e.target.value)}
					/>

					<FormControl variant='standard'>
						<InputLabel id='category'>Category</InputLabel>
						<Select
							sx={{ m: 3, width: '50vw' }}
							className='inputBoxes2'
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
					<div className='centered-item-row'>
						<Button
							type='submit'
							style={{ backgroundColor: 'indigo' }}
							variant='contained'
							color='secondary'
							onClick={updateAPIData}>
							Submit Update
						</Button>
						<Button
							style={{ backgroundColor: 'lightgrey' }}
							variant='contained'
							color='secondary'
							onClick={refreshPage}>
							<Link href='/Resources'>Cancel</Link>
						</Button>
					</div>
				</form>
			</Box>
		</Grid>
	);
}
