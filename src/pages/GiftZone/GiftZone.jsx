import { useState,useEffect } from "react";
import { Link } from "react-router-dom";


const  GiftZone = () => {
    const [giftImage, setGiftImage] =useState([0])

    useEffect(() => {
        // Fetch data using useEffect
        const fetchData = async () => {
          try {
            const response = await fetch('/data.json'); // Replace with the actual path
            const data = await response.json();
            setGiftImage(data); // Update the state with the fetched data
          } catch (error) {
            console.error('Error loading the data:', error);
          }
        };
    
        fetchData(); // Call the fetch function
      }, []); // Empty dependency array ensures this runs only once
  return (
    <div>

      <div className="text-center my-20">
        <h5 className="text-[#728156]">OUR GIFT SHOP</h5>
      <h1 className="text-[#728156] text-4xl font-[Montserrat] uppercase">--Thoughtful Gifts for plant lovers-- </h1>
      </div>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 ">
        {giftImage.map((plant) => (
            <div key={plant.id} >
                <Link to={`/details/${plant.id}`}>
                <img
                className=" w-full  lg:w-[300px] md:h-[300px] cursor-pointer transform transition-transform duration-300 hover:scale-105"
              src={plant.image}
              alt={plant.name}
              
            />
                </Link>
               
             <div className="my-7">
             <h2 className="text-center font-[Montserrat]">{plant.name}</h2>
             <h5 className="text-center text-[#728156]">{plant.price} Tk</h5>
             </div>
            </div>
         
        ))}
      </div>
    </div>
  )
};

export default GiftZone;
