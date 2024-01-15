import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    borderTop: `1px solid black`,

}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "transparent",

}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
}));

export default function CustomizedAccordions(props) {
  const [expanded, setExpanded] = React.useState('false');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    // <div className='accordion_container'>
    <Grid container  md={11} xs={11}  marginTop={0}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        
          <Typography variant="h5">{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Grid container spacing={0}  >
            
            <Grid container  md={6} xs={12} >
                <img src="https://via.placeholder.com/250" alt="placeholder" />
            </Grid>
            <Grid container  md={6} xs={12} >
                <Typography variant="subtitle1" align='center'>
                    {props.bodytext}
                </Typography>
            </Grid>
            </Grid>
        </AccordionDetails>
      </Accordion>
      </Grid>
    // </div>
  );
}