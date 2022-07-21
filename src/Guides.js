import React from 'react';
import './App.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const Guides = () => {
  return (
    <div class="flex flex-col h-screen bg-bgcol">
        <div class="flex flex-col h-full w-2/3 m-auto bg-bgcol">

        <Card sx={{ maxWidth: null }} class="my-1 bg-gray-200">
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Water Cooling Guide
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   What is watercooling?
                   <br/>
                   Why watercool?
                   <br/>
                   Things to consider
                   <br/>
                   Brands
                   <br/>
                   In Depth Guide
                </Typography>
                </CardContent>
                <CardActions>
                    <Button size="medium">Read Full</Button>
                </CardActions>
            </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: null }} class="my-1 bg-gray-200">
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    In-depth guide to keyboards
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   Mechanical vs Membrane
                   <br/>
                   Diffrant types of swiches
                   <br/>
                   Keycap material
                   <br/>
                   Keycap profiles
                   <br/>
                   Build your own
                </Typography>
                </CardContent>
                <CardActions>
                    <Button size="medium">Read Full</Button>
                </CardActions>
            </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: null }} class="my-1 bg-gray-300">
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    PC Building Guide
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   Why should you build your own PC?
                   <br/>
                   Things to consider
                   <br/>
                   How to choose your parts
                   <br/>
                    Common mistakes to avoid
                   <br/>
                    Step by step guide
                </Typography>
                </CardContent>
                <CardActions>
                    <Button size="medium">Read Full</Button>
                </CardActions>
            </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: null }} class="my-1 bg-gray-300">
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Guide to Monitors
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Why is a good monitor important?
                   <br/>
                   Things to look for when buying a monitor
                   <br/>
                    Colour Accuracy
                   <br/>
                    Refresh rate vs Reponse time
                   <br/>
                    Recommendations
                </Typography>
                </CardContent>
                <CardActions>
                    <Button size="medium">Read Full</Button>
                </CardActions>
            </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: null }} class="my-1 bg-gray-300">
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    How to pick a good mouse
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Detailed guide to choosing your next mouse
                   <br/>
                    What makes a good mouse?
                   <br/>
                    Is weight really that important?
                   <br/>
                    Wireless vs wired
                   <br/>
                    Ranking criteria
                </Typography>
                </CardContent>
                <CardActions>
                    <Button size="medium">Read Full</Button>
                </CardActions>
            </CardActionArea>
        </Card>

        </div>
    </div>

  );
}

export default Guides;