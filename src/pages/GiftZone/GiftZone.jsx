import { useState,useEffect } from "react";


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
        <h5 className="text-orange-500">OUR GIFT SHOP</h5>
      <h1 className="text-orange-500 text-4xl uppercase">Thoughtful Gifts for plant lovers</h1>
      </div>
      <div className="grid grid-cols-3 space-x-10 space-y-10">
        {giftImage.map((plant) => (
            <div key={plant.id} >
                <img
                className=" w-[500px] h-[500px]"
              src={plant.image}
              alt={plant.name}
              
            />
             <div className="my-7">
             <h2 className="text-center">{plant.name}</h2>
             <h5 className="text-center text-orange-400">{plant.price} Tk</h5>
             </div>
            </div>
         
        ))}
      </div>
    </div>
  )
};

export default GiftZone;
