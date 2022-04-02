import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import logo from '../Images/SPALogo.png';

const pages = ['Home', 'Resources', 'Checklist'];

const Navbar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar
			position='static'
			style={{ background: 'indigo', margin: '0' }}>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
						}}>
						<Link
							style={{
								textDeocoration: 'none',
								color: 'black',
							}}
							to={'/Home'}>
							{
								<img
									src={logo}
									className='logo'
									alt='self-publishing axis logo'></img>
							}
						</Link>
					</Typography>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'flex', md: 'none' },
						}}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}>
							{pages.map((page) => (
								<MenuItem
									key={page}
									onClick={handleCloseNavMenu}>
									<Typography textAlign='center'>
										<Link
											style={{
												textDeocoration:
													'none',
												color: 'black',
											}}
											to={`/${page}`}>
											{page}
										</Link>
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{
							flexGrow: 1,
							display: { xs: 'flex', md: 'none' },
						}}>
						<Link
							style={{
								textDeocoration: 'none',
								color: 'white',
							}}
							to={'/Home'}>
							{
								<img
									src={logo}
									className='logo'
									alt='self-publishing axis logo, purple book surrounded by a circle and arrows pointing in multiple directions, all facing outward'></img>
							}
						</Link>
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'none', md: 'flex' },
						}}>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{
									my: 2,
									color: 'white',
									display: 'block',
								}}>
								<Typography
									variant='h6'
									underline='none'
									textAlign='center'>
									<Link
										style={{
											textDeocoration: 'none',
											color: 'white',
										}}
										to={`/${page}`}>
										{page}
									</Link>
								</Typography>
							</Button>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Navbar;
