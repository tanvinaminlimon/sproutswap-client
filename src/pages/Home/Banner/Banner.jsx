import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../../assets/BannerImages/image_1.jpg";
import img2 from "../../../assets/BannerImages/image_2.jpg";
import img3 from "../../../assets/BannerImages/image_3.jpg";
import img4 from "../../../assets/BannerImages/image_4.jpg";
import img5 from "../../../assets/BannerImages/image_5.jpg";
import img6 from "../../../assets/BannerImages/image_6.jpg";

const Banner = () => {
    
  return (
    <Carousel>
                <div>
                    <img  src={img1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img  src={img2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img  src={img3} />
                    <p className="legend">Legend 3</p>
                </div>
                
                <div>
                    <img  src={img5} />
                    <p className="legend">Legend 3</p>
                </div>
                
            </Carousel>
  )
};

export default Banner;