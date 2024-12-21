import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const closeBanner = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="bg-green-100 text-gray-800 relative flex items-center justify-between px-4 py-2">
        {/* Left Side */}
        <div className="flex items-center">
          <p className="text-blue-600 font-bold mr-2">Subscription Plan Discount</p>
          <span className="text-green-600 font-bold">SpourtSwap Basic</span>
          <span className="text-pink-500 font-bold ml-2">start 299 Tk</span>
        </div>

        {/* Button */}
        <div className="flex items-center space-x-2">
          <Link to='/plantsub'>
          <button className="bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600 transition duration-200 mr-7">
            Subscribe
          </button>
          </Link>
        </div>

        {/* Close Button */}
        <button
          onClick={closeBanner}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>
      </div>
    )
  );
};

export default TopBanner;
