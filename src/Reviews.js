import React from 'react';
import './App.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';


const Reviews = () => {
  return (
    <div className="flex flex-col h-screen bg-neutral-800">
        <div class="flex flex-col h-full w-5/6 m-auto bg-zinc-700">
            <Card sx={{ maxWidth: null }} class="my-1 bg-gray-300">
                <CardActionArea>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Apple M2 Macbook Air
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

            <Card sx={{ maxWidth: null }} class="my-1 bg-gray-300">
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
                        Deep Dive Into Mechanical Keyboard Switches
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    What is a Mechanical Keyboard Switch?
                    <br/>
                    Basics - MX Switch Types 
                    <br/>
                    Switch Types – A Closer Look
                    <br/>
                    Switch Plastics
                    <br/>
                    Spring Types
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
                    Top 10 entry level keyboards
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    What to look for?
                    <br/>
                    Rannking criteria
                    <br/>
                    Our methdology
                    <br/>
                    Top 10
                    <br/>
                    Honorable mentions
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

export default Reviews;


