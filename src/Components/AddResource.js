import axios from 'axios';
import React, { useState } from 'react';

export default function AddResource() {
	const [title, setTitle] = useState('');
	const [creator, setCreator] = useState('');
	const [link, setLink] = useState('');
	const [category, setCategory] = useState('');

	const postData = () => {
		axios.post(
			'https://crudcrud.com/api/776d23438df143b9be860123700b634d/pubResources',
			{
				title,
				creator,
				link,
				category,
			}
		);
	};
	return (
		<div className='item-form'>
			<div className='item-form-box'>
				<h2>Add a New Resource</h2>
				<form>
					<label className='col-form-label'>Title</label>
					<input
						className='form-control'
						type='text'
						name='title'
						id='title'
						placeholder='Enter the resource title.'
						onChange={(e) => setTitle(e.target.value)}
					/>
					<label className='col-form-label'>Creator</label>
					<input
						className='form-control'
						type='text'
						name='creator'
						id='creator'
						placeholder='Enter the resource creator.'
						onChange={(e) => setCreator(e.target.value)}
					/>
					<label className='col-form-label'>Link</label>
					<input
						className='form-control'
						type='text'
						name='link'
						id='link'
						placeholder='Enter the resource link'
						onChange={(e) => setLink(e.target.value)}
					/>
					<label className='col-form-label'>Category</label>
					<select onChange={(e) => setCategory(e.target.value)}>
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
					</select>
					<button
						onClick={postData}
						className='btn btn-secondary mt-3'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}
