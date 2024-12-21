import React from "react";
import '../Gallery/gallery_style.css';

import plant_1 from '../../assets/plant_image/astrophytum_cactus.jpg'
import plant_2 from '../../assets/plant_image/haworthia_cooperi.jpg'
import plant_3 from '../../assets/plant_image/miniature_sansevieria.jpg'
import plant_4 from '../../assets/plant_image/purple_Haze_succulent.jpg'
import plant_5 from '../../assets/plant_image/sansevieria.jpg'
import plant_6 from '../../assets/plant_image/sensevieria_Boncel_Mini_Variegated.jpg'
import plant_7 from '../../assets/plant_image/astrophytum_cactus.jpg'
import plant_8 from '../../assets/plant_image/astrophytum_cactus.jpg'

const Gallery = () => {
  return (
    <div>
      
        <h1 className="title">Gallery</h1>
    
      <main>
        <section className="gallery-container">
          {/* Row 1 */}
          <div className="row">
            <img src={plant_1} alt="Plant 3" />
          </div>

          {/* Row 2 */}
          <div className="row">
            <div>
              <img src={plant_2} alt="Plant 1" />
            </div>
            <div>
              <img src={plant_3} alt="Plant 2" />
            </div>
            <div className="vertical-collage">
              <img src={plant_4} alt="Plant 4" />
              <img src={plant_5} alt="Plant 5" />
            </div>
          </div>

          {/* Row 3 */}
          <div className="row">
            <div>
              <img src={plant_6} alt="Plant 5" />
            </div>
            <div className="square-collage">
               <div>
               <img src={plant_7} alt="Plant 1" />
               </div>
               <div>
               <img src={plant_8} alt="Plant 2" />
               </div>
               <div>
               <img src={plant_2} alt="Plant 3" />
               </div>
               <div>
               <img src={plant_4} alt="Plant 7" />
               </div>
            </div>
            <div>
              <img src={plant_6} alt="Plant 6" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Gallery;
