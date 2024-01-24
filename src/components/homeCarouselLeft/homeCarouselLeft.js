import React from "react";
import { CRow, CCol } from "@coreui/react";
import Flickity from "react-flickity-component";
import "./homeCarouselLeft.css";
import "./flickity.css";

const CustomLayout = () => {
  const flickityOptions = {
    pageDots: false, // This will hide the page dots
    prevNextButtons: false,
    contain: true,
  };

  return (
    <div className="carousel-container">
      <CRow className="subcarousel">
        <CCol md={4} className="my-auto">
          <div className="text-content">
            <h2>SELECTED APARTMENTS</h2>
            <p>
              City projects to step into a world of urban luxury, where high-rise living becomes a
              symphony of style, comfort, and sophistication.
            </p>
          </div>
        </CCol>
        <CCol md={8}>
          <Flickity options={flickityOptions}>
            <div className="carousel-image-container">
              <img src="https://picsum.photos/800/500" />
              <span className="flickity-carousel-caption">Caption 1</span>
            </div>
            <div className="carousel-image-container">
              <img src="https://picsum.photos/800/500" />
              <span className="flickity-carousel-caption">Caption 2</span>
            </div>
            <div className="carousel-image-container">
              <img src="https://picsum.photos/800/500" />
              <span className="flickity-carousel-caption">Caption 3</span>
            </div>
          </Flickity>
        </CCol>
      </CRow>
    </div>
  );
};

export default CustomLayout;
