import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<h1>Checklist</h1>
			<hr />
			<div className='links'>
				<NavLink
					to='/'
					className='link'
					activeClassName='active'
					exact>
					Checklist
				</NavLink>
				<NavLink
					to='/add'
					className='link'
					activeClassName='active'>
					Add Item
				</NavLink>
			</div>
		</header>
	);
};

export default Header;
