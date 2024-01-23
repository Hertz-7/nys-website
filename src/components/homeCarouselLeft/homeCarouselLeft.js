import React from 'react';
import {
  CCarousel,
  CCarouselItem,
  CCarouselCaption,
  CCol,
  CRow,
  CButton,
  CImage
} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import sample from './sample.mp4';
import Test from './test.avif';
import './homeCarouselLeft.css';

// Assume `sample` is the path to your video or imported video file

const CustomLayout = () => {
  return (
    <div className="carousel-container">
    <CRow className='subcarousel'>
      <CCol md={5} className="my-auto">
        <div className="text-content">
          <h2>SELECTED APARTMENTS</h2>
          <p>City projects to step into a world of urban luxury, where high-rise living becomes a symphony of style, comfort, and sophistication.</p>
        </div>
      </CCol>
      <CCol md={7}>
        <CCarousel controls  transition="crossfade">
          <CCarouselItem>
          <CImage className="d-block w-100" src={Test} alt={`Slide `} />

            <CCarouselCaption className=" d-none d-md-block">
              <h1>First slide label</h1>
              <h5>Some representative placeholder content for the first slide.</h5>
            </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
          <CImage className="d-block w-100" src={Test} alt={`Slide `} />

            <CCarouselCaption className=" d-none d-md-block">
              <h1>Second slide label</h1>
              <h5>Some representative placeholder content for the first slide.</h5>
            </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
          <CImage className="d-block w-100" src={Test} alt={`Slide `} />

            <CCarouselCaption className=" d-none d-md-block">
              <h1>Second slide label</h1>
              <h5>Some representative placeholder content for the first slide.</h5>
            </CCarouselCaption>
          </CCarouselItem>
          {/* Repeat for other slides */}
        </CCarousel>
      </CCol>
    </CRow>
    </div>
  );
};

export default CustomLayout;
