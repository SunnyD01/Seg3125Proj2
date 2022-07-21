import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const FAQ = () => {
    return (
      <div className="flex flex-col h-full bg-neutral-800">
          <div class="flex flex-col h-full w-2/3 m-auto bg-zinc-700">

            <Card variant="outlined" sx={{ maxWidth: null }} >
              <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Why should you build you own PC?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Building your own PC is the best solution for those who want full control over every aspect of their build.
                It provides the most thorough customization options, from the CPU to the fans and lighting. That means you'll always have the exact hardware you need.
              </Typography>
              </CardContent>
            </Card>

            <Card variant="outlined" sx={{ maxWidth: null }} >
              <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                How do I know what parts are compatible?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We recommend using <a class="text-blue-600" target="_blank" href="https://pcpartpicker.com">pcpartpicker</a> which will make sure all your parts are compatible.
              </Typography>
              </CardContent>
            </Card>

            <Card variant="outlined" sx={{ maxWidth: null }} >
              <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Do I have to build my own PC??
              </Typography>
              <Typography variant="body2" color="text.secondary">
              You do not have to build your own PC. If you are uncomfortable doing so then you can hire someone nearby or go to a computer repair shop to do it. 
              However, it’s very fun and rewarding to build your own PC, as you’ll learn a lot about the process and are likely to build other ones later.
              </Typography>
              </CardContent>
            </Card>

            <Card variant="outlined" sx={{ maxWidth: null }} >
              <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                How long does it take to build a PC?
              </Typography>
              <Typography variant="body2" color="text.secondary">
              t takes about 3-4 hours to build a PC if it is your first time and on your own. If you are experienced you can typically get it done within 1-2 hours, but it also depends on your set up.
               For example, it might take a little extra time to optimize your cable management.
              </Typography>
              </CardContent>
            </Card>

            <Card variant="outlined" sx={{ maxWidth: null }} >
              <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                What tools do you need to build a Gaming PC?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                All you need is a philips head screw driver.
              </Typography>
              </CardContent>
            </Card>

            <Card variant="outlined" sx={{ maxWidth: null }} >
              <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Is my power supply enough?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We recommend using a tool to estimate your total power draw. Addionally you can check the minimum recommend wattage of you gpu. Remember to alway air on the side of caution and buy a large power supply if needed.
              </Typography>
              </CardContent>
            </Card>

            <Card variant="outlined" sx={{ maxWidth: null }} >
              <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                What is your shipping policy?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We offer free shipping in North America on orders over $200 USD.
                <br/>
                International shipping will be calculated at checkout.
              </Typography>
              </CardContent>
            </Card>

            <Card variant="outlined" sx={{ maxWidth: null }} >
              <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                What is your return policy?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We offer 30 day returns provided your product is in good condtion.
                <br/>
                The buyer is responsible for return shipping
              </Typography>
              </CardContent>
            </Card>

          </div>
        </div>

  );
}

export default FAQ;