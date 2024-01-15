import React from 'react';
import { Grid, Typography, Link, Box } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Footer = () => {
  return (<>
    <Box sx={{ width: '100%', padding: '20px', backgroundColor: 'white', color: 'grey' ,borderTop:"2px solid lightgray" }}>
      <Grid container justifyContent="space-between" alignItems="center" sx={{
        '& a': {
            textDecoration: 'none', // removes the underline from links
            color: 'inherit', // the link color will be the same as the text color
            marginBottom: '0.35rem', // adds some space below each link
          }
      }}>
        {/* Left side */}
        <Grid item>
          <Typography variant="h5" gutterBottom>LUV|Studio</Typography>
          <Typography variant="body1">Libertat 15 - 08012 Barcelona, Spain</Typography>
          <Typography variant="body1">+34 934 155 685</Typography>
          <Typography variant="body1">luv@luv.studio</Typography>
          
          <Typography variant="subtitle1" mt={2}>FOLLOW US</Typography>
          <Link href="#" variant="body2" sx={{ marginRight: '10px' }}>Instagram</Link>
          <Link href="#" variant="body2" sx={{ marginRight: '10px' }}>Facebook</Link>
          <Link href="#" variant="body2" sx={{ marginRight: '10px' }}>LinkedIn</Link>
        </Grid>

        {/* Center: Legal links */}
        

        {/* Right side */}
        <Grid item>
          <Typography variant="body1" sx={{ textAlign: 'right' }}>Based in Barcelona, Ibiza and Madrid. Working Worldwide.</Typography>
          <Grid container alignItems="center" justifyContent="flex-end">
          <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', color:"black" }}>
          LET'S TALK <ArrowForwardIosIcon sx={{ fontSize: '1rem', ml: '5px' }} />
        </Typography>
      </Grid>
    </Grid>
  </Grid>
  
</Box>
    <Box sx={{ width: '100%', padding: '20px', backgroundColor: 'black', color: 'white', paddingLeft: '40%',
        '& a': {
            textDecoration: 'none', // removes the underline from links
            color: 'white', // the link color will be the same as the text color
            marginBottom: '0.35rem', // adds some space below each link
        }
     }} >
            <Link href="#" variant="body2" sx={{ marginRight: '10px' }}>Privacy Policy</Link>
            <Link href="#" variant="body2" sx={{ marginRight: '10px' }}>Legal Notice</Link>
            <Link href="#" variant="body2">Cookies Policy</Link>
            </Box>
</>

);
};

export default Footer;