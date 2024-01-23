import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CCarouselCaption } from '@coreui/react'
import { CCarouselItem } from '@coreui/react'
import { CCarousel, CImage } from '@coreui/react'
import Test from './test.avif'
import "./homeCarousel.css"
import sample from './sample.mp4'
const homeCarousel = () => {
    return (
        <CCarousel controls indicators transition="crossfade">
            <CCarouselItem >
                <video autoPlay loop muted>
                    <source src={sample} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <CCarouselCaption className="caption d-none d-md-block">
                <h1>First slide label</h1>
                <h5>Some representative placeholder content for the first slide.</h5>
                </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
                <video autoPlay loop muted>
                    <source src={sample} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <CCarouselCaption className="caption d-none d-md-block">
                <h1>Second slide label</h1>
                <h5>Some representative placeholder content for the first slide.</h5>
                </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
                <video autoPlay loop muted>
                    <source src={sample} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <CCarouselCaption className="caption d-none d-md-block">
                <h1>Third slide label</h1>
                <h5>Some representative placeholder content for the first slide.</h5>
                </CCarouselCaption>
            </CCarouselItem>
        </CCarousel>
    );
  };
  
  export default homeCarousel;
  