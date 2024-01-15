import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Link } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { RxCross1 } from "react-icons/rx";
import PropTypes from 'prop-types';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import './navbar.css';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
function Navbar(props) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const handleAccordionClick = (event) => {
    // Stop the click event from propagating up to the Drawer's onClose handler
    event.stopPropagation();
  };
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
      borderBottom: `1px solid `,
      borderColor: 'lightgrey',
      fontWeight: '1',
      
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary  {...props}
    />
  ))(({ theme }) => ({
    backgroundColor: "transparent",
    color: "black" ,
    fontWeight: '1',

  
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  }));
  const list = () => (
    <Box
      sx={{ width:"500"}} //width ka masla
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      marginTop={10}
    >
      
      <Grid container spacing={2}>
      {/* Left Section */}
      <Grid item xs={12} md={5} padding={15} order={{ xs: 2, md: 1 }} marginLeft={5} borderRight={1} borderColor={"lightgray"} sx={{
          '& .MuiTypography-h6': {
            marginBottom: '0.5rem',
            fontWeight: '2',
            borderBottom: '1px solid lightgrey',
          },
          '& .MuiTypography-root':
          {
            display: 'block', // ensures the Typography component beha    padding: 0.3em 0;
            color: '#777676',
            padding: '0.3em 0',
            fontWeight: '1',

          },
        '& a': {
            textDecoration: 'none', // removes the underline from links
            color: 'inherit', // the link color will be the same as the text color
            display: 'block', // makes each link take up its own line
            marginBottom: '0.35rem', // adds some space below each link
          },
            '& .MuiTypography-gutterTop': {
            marginTop: '2rem', // adds space above the "Follow Us" section
          },
          // Additional styles can be added here as needed
          }}>
        <Typography variant="h6">CONTACT</Typography>
        <Typography variant="subtitle1">Libertat 15 - 08012 Barcelona, Spain</Typography>
        <Typography variant="subtitle1">+34 934 155 685</Typography>
        <Link href="mailto:luv@luv.studio">luv@luv.studio</Link>
        <Typography variant="h6" gutterTop>Follow Us</Typography>
          {/* Links can be replaced with icons */}
          <Link href="#" variant="body2" >Instagram</Link>
          <Link href="#" variant="body2">Facebook</Link>
          <Link href="#" variant="body2">LinkedIn</Link>
    </Grid>
      
      {/* Right Section */}
      <Grid item xs={12} md={5 } order={{ xs: 1, md: 2 }} sx={{
        '& a': {
          textDecoration: 'none', // removes the underline from links
          color: 'grey', // the link color will be the same as the text color
          display: 'block', // makes each link take up its own line
          marginBottom: '0.35rem', // adds some space below each link
        }      }}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} onClick={handleAccordionClick}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          HOME
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} onClick={handleAccordionClick}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Projects</Typography>
       
        </AccordionSummary>
        <AccordionDetails>
          
          <Link href="#" variant="body2" className='drawer-link'>Instagram</Link>
          <Link href="#" variant="body2" className='drawer-link'>Facebook</Link>
          <Link href="#" variant="body2" className='drawer-link'>LinkedIn</Link>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} onClick={handleAccordionClick}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            ABOUT
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          
          <Link href="#" variant="body2" className='drawer-link'>Instagram</Link>
          <Link href="#" variant="body2" className='drawer-link'>Facebook</Link>
          <Link href="#" variant="body2" className='drawer-link'>LinkedIn</Link>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} onClick={handleAccordionClick}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>SERVICES</Typography>
        </AccordionSummary>
        <AccordionDetails>
          
          <Link href="#" variant="body2" className='drawer-link'>Instagram</Link>
          <Link href="#" variant="body2" className='drawer-link'>Facebook</Link>
          <Link href="#" variant="body2" className='drawer-link'>LinkedIn</Link>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} onClick={handleAccordionClick}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>CAREERS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          
          <Link href="#" variant="body2" className='drawer-link'>Instagram</Link>
          <Link href="#" variant="body2" className='drawer-link'>Facebook</Link>
          <Link href="#" variant="body2" className='drawer-link'>LinkedIn</Link>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} onClick={handleAccordionClick}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>GROUP</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            
          <Link href="#" variant="body2" className='drawer-link'>Instagram</Link>
          <Link href="#" variant="body2" className='drawer-link'>Facebook</Link>
          <Link href="#" variant="body2" className='drawer-link'>LinkedIn</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>  
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar position="relative" color='transparent' className="MuiAppBar-root">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              NY
            </Typography>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(!drawerOpen)}
            >
              {drawerOpen ? <RxCross1 /> : <MenuIcon />}
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      </Box>
      <Drawer
        anchor='right'
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </>
  );
}

export default Navbar;
