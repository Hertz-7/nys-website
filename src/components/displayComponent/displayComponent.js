import React from 'react';
import './displayComponent.css'; // Make sure to create a corresponding CSS file
import sample from './sample.mp4';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
const displayComponent = () => {
  return (

    <Grid container spacing={0} className="display-grid" >
        <Grid md={6} xs={12} className="text-side">
        <p  className='displaytext'>Achieving the <em>best results</em> through the expert combination of the <em>correct professionals.</em></p>
    
        </Grid>

        <Grid md={6} xs={12} className="video-container">
            <video autoPlay loop muted>
                <source src={sample}type="video/mp4" />
                Your browser does not support the video tag.
                </video>
        </Grid>

    </Grid>
    // <div className="container">
    //   <div className="text-side">
    //     <p  className='displaytext'>Achieving the <em>best results</em> through the expert combination of the <em>correct professionals.</em></p>
    //   </div>
    //   <div className="video-side">
    //     <video autoPlay loop muted>
    //       <source src={sample}type="video/mp4" />
    //       Your browser does not support the video tag.
    //     </video>
    //   </div>
    // </div>
  );
};

export default displayComponent;
