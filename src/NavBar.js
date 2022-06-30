import React from 'react';
import {Link} from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
    return (

		<Box sx={{ flexGrow: 1 }}>
		<AppBar position="static">
		<Toolbar>
			<IconButton
			size="large"
			edge="start"
			color="inherit"
			aria-label="menu"
			sx={{ mr: 2 }}
			>
			<MenuIcon />
			</IconButton>
			<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
			Atlas Computers
			</Typography>
			<Button component={Link} to="/" color="inherit">Home</Button>
			<Button component={Link} to="/guides" color="inherit">Guides</Button>
			<Button component={Link} to="/reviews" color="inherit">Reviews</Button>
			<Button component={Link} to="/shop" color="inherit">Shop</Button>
			<Button component={Link} to="/faq" color="inherit">FAQ</Button>
			<Button component={Link} to="/contactus" color="inherit">Contact Us</Button>

	
		</Toolbar>
		</AppBar>
		</Box>

    )
}

export default NavBar;