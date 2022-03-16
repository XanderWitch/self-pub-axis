import React from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from '@mui/material';

const ConfirmDelete = (props) => {
	const { title, children, open, setOpen, onConfirm } = props;
	return (
		<Dialog
			open={open}
			onClose={() => setOpen(false)}
			aria-labelledby='confirm-dialog'>
			<DialogTitle id='confirm-dialog'>{title}</DialogTitle>
			<DialogContent>{children}</DialogContent>
			<DialogActions>
				<Button
					variant='contained'
					onClick={() => setOpen(false)}
					color='secondary'>
					Oops! No, please!
				</Button>
				<Button
					variant='contained'
					onClick={() => {
						setOpen(false);
						onConfirm();
					}}
					color='default'>
					Of course. Delete it!
				</Button>
			</DialogActions>
		</Dialog>
	);
};
export default ConfirmDelete;
