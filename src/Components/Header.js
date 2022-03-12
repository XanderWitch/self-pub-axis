import React from 'react';
import logo from '../Images/SPALogo.png';
import { Outlet, Link } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<nav
				style={{
					borderBottom: 'solid 1px',
					paddingBottom: '1rem',
				}}>
				<img
					src={logo}
					className='logo'
					alt='Self-Publishing Axis logo, shades of purple with an open book overlaying an axis with arrows pointing in eight directions from the center'
				/>
				<Link to='/'>Home</Link>{' '}
				<Link to='/News'>Self-Publishing and Writing News</Link>{' '}
				<Link to='/Checklist'>Self-Publishing Checklist</Link>
			</nav>
			<Outlet />
		</div>
	);
};

export default Header;
