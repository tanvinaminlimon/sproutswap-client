import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../../assets/BannerImages/image_1.jpg";
import img2 from "../../../assets/BannerImages/image_2.jpg";
import img3 from "../../../assets/BannerImages/image_3.jpg";

import img5 from "../../../assets/BannerImages/image_5.jpg";
import img6 from "../../../assets/logo/logo_1.png"
import img7 from "../../../assets/logo/logo_2.png"

const Banner = () => {
    
  return (
    <Carousel
    autoPlay            // Enables automatic slide
    infiniteLoop        // Allows carousel to loop continuously
    interval={3000}     // Sets slide interval to 3000ms (3 seconds)
    showThumbs={false}  // Hides thumbnail navigation
    showStatus={false}  // Hides status (e.g., "1/6")
    stopOnHover={false}
    >
                <div>
                    <img  src={img1} />
                   
                </div>
                <div>
                    <img  src={img2} />
                   
                </div>
                <div>
                    <img  src={img3} />
                    
                </div>
                
                <div>
                    <img  src={img5} />
             
                </div>
                <div>
                    <img  src={img6} />
             
                </div>
                <div>
                    <img  src={img7} />
             
                </div>
                
            </Carousel>
  )
};

export default Banner;