import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/material';
import { Paper } from '@mui/material';

const Checklist = () => {
	return (
		<>
			<h1>Self-Publishing Checklist</h1>
			<p>
				Have you done everything you can to ensure that your book is
				a success?
			</p>
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
				}}>
				<Paper
					elevation={3}
					sx={{ backgroundColor: '#fdf', p: 5, mt: 2 }}>
					<FormGroup>
						<h2>Composition</h2>
						<FormControlLabel
							control={<Checkbox color='secondary' />}
							className='indent'
							label='Outline or plot your novel with your tool of choice.'
						/>

						<FormControlLabel
							control={<Checkbox color='secondary' />}
							className='indent'
							label='Write your first draft. Finish it!'
						/>
						<FormControlLabel
							control={<Checkbox color='secondary' />}
							className='indent'
							label='Let it rest.'
						/>

						<h2>Revision & Editing</h2>
						<FormControlLabel
							control={<Checkbox color='secondary' />}
							className='indent'
							label='Send draft to alpha readers or critique partner(s)for review.'
						/>
						<FormControlLabel
							control={<Checkbox color='secondary' />}
							className='indent'
							label='Self-edit and make any feed-back related changes from alpha readers and/or critique partner(s).'
						/>
						<FormControlLabel
							control={<Checkbox color='secondary' />}
							className='indent'
							label='Send current draft to beta readers.'
						/>
						<FormControlLabel
							control={<Checkbox color='secondary' />}
							className='indent'
							label='Self-edit and make any feed-back related changes from beta readers.'
						/>
						<FormControlLabel
							control={<Checkbox color='secondary' />}
							className='indent'
							label='If the story still seems shaky, send your draft to a developmental editor.'
						/>
						<FormControlLabel
							control={<Checkbox color='secondary' />}
							className='indent'
							label='Self-edit and make any feed-back related changes from your developmental editor.'
						/>
						<FormControlLabel
							control={<Checkbox color='secondary' />}
							className='indent'
							label='Send your book to an editor for copy editing and line editing.'
						/>
						<h2>Production</h2>
						<FormControlLabel
							control={<Checkbox color='secondary' />}
							className='indent'
							label='Write your book description and collate your book’s metadata. This metadata (title, author, keywords, and categories) should be included in your ebook file.'
						/>
						<FormControlLabel
							control={<Checkbox color='secondary' />}
							className='indent'
							label='Write your back cover copy and get publicity blurbs.'
						/>
						<FormControlLabel
							control={<Checkbox color='secondary' />}
							className='indent'
							label='Format your book or send it to a professional book designer.'
						/>
						<FormControlLabel
							control={<Checkbox color='secondary' />}
							className='indent'
							label='Have your formatted book proofread (last round of edits!). Interior book designers/formatters will often allow for making a limited number of changes as part of their service.'
						/>
						<FormControlLabel
							control={<Checkbox color='secondary' />}
							className='indent'
							label='During interior design or proofreading, design your book cover or send it to a professional designer.'
						/>
						<FormControlLabel
							control={<Checkbox color='secondary' />}
							className='indent'
							label='Publish on your platform(s) of choice.'
						/>
						<h2>Marketing</h2>
						<FormControlLabel
							control={<Checkbox color='secondary' />}
							className='indent'
							label='A story for another day.'
						/>
					</FormGroup>
				</Paper>
			</Box>
		</>
	);
};

export default Checklist;
