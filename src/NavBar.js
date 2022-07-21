import React from 'react';
import {Link} from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { blueGrey } from '@mui/material/colors';

const primary = blueGrey[200]; // #f44336
const NavBar = () => {
    return (
		

		<Box sx={{ flexGrow: 1 }}>
		<AppBar class="w-2/3 mx-auto" position="static">
		<Toolbar >
			<Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color='primary'>
				Atlas Computers
			</Typography>
			<Button component={Link} to="/Seg3125Proj2">Home</Button>
			<Button component={Link} to="/guides">Guides</Button>
			<Button component={Link} to="/reviews">Reviews</Button>
			<Button component={Link} to="/shop">Shop</Button>
			<Button component={Link} to="/faq">FAQ</Button>
			<Button component={Link} to="/contactus">Contact Us</Button>
		</Toolbar>
		</AppBar>
		</Box>

    )
}

export default NavBar;