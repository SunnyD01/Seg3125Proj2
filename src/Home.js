import React from 'react';
import './App.css';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {Link} from "react-router-dom";

import BlueBubbleGum from './assets/BBL_home.png';

const Home = () => {
  return (
    <div className="flex flex-col h-screen bg-neutral-800">
      <div class="flex flex-col h-full w-5/6 m-auto bg-zinc-700">
        <div class="h-1/2 w-auto mx-auto my-5">
            <img src={BlueBubbleGum} alt="Blue Bubblegum" className="h-full w-auto mx-auto"/>
        </div>
        <div class="flex flex-row h-1/2 mb-5">
          <div class="w-1/2 bg-stone-300 mx-5 mt-5">
            <div className='h-1/6 bg-[#0F172A]'>
                <Typography color={"#808EA3"} align="center" variant="h4" component="div">
                    Latest Reviews<br/>Color scheme not final, Full stories not typed out yet
                </Typography>
            </div>

              <Card variant="outlined" sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Should you buy the M2 MacBook Pro?
                  </Typography>
                  <Typography variant="body2">
                    Does the m2 MacBook Pro live up to the hype or should you buy the new MacBook Air?
                    <br/>
                    All changes and comparisions examined
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button component={Link} to="/reviews" size="medium">Full Story</Button>
                </CardActions>
              </Card>

              <Card variant="outlined" sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Glorious Gmmk Pro
                  </Typography>
                  <Typography variant="body2">
                  The GLORIOUS GMMK PRO is a barebones keyboard that doesn't come with keycaps or switches. It's highly customizable but is it worth the price?
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button component={Link} to="/reviews" size="medium">Full Story</Button>
                </CardActions>

              </Card>
              <Card variant="outlined" sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Logitech G Pro Superlight
                  </Typography>
                  <Typography variant="body2">
                  The new Logitech mouse is now just 60g. Is it worth the upgrade?
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button component={Link} to="/reviews" size="medium">Full Story</Button>
                </CardActions>
              </Card>
          </div>

          <div class="w-1/2 bg-stone-300 mx-5 mt-5">
            <div className='h-1/6 bg-[#0F172A]'>
                <Typography color={"#808EA3"} align="center" variant="h4" component="div">
                    Latest Guides<br/>Color scheme not final, Full stories not typed out yet
                </Typography>
            </div>
              <Card variant="outlined" sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Begineer's Guide to Mechanical Keyboards
                  </Typography>
                  <Typography variant="body">
                    All you need to know before buying your next keyboard
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button component={Link} to="/reviews" size="medium">Full Guide</Button>
                </CardActions>
              </Card>

              <Card variant="outlined" sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Water Cooling Guide
                  </Typography>
                  <Typography variant="body2">
                    Comprehensive guide to begin water cooling your pc. Advanced tips for experienced builders
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button component={Link} to="/reviews" size="medium">Full Guide</Button>
                </CardActions>
              </Card>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;