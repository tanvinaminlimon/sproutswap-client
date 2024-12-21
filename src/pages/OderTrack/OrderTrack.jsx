import React from "react";

const OrderTrack = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <div className="w-full max-w-md mt-10 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold text-center mb-6">ORDER TRACK</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Enter Phone Number"
              className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="invoice">
              Invoice ID
            </label>
            <input
              type="text"
              id="invoice"
              placeholder="Enter Your Invoice ID"
              className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-200"
          >
            SUBMIT
          </button>
        </form>
      </div>

      <div className="flex flex-col md:flex-row justify-around items-center w-full bg-white shadow-lg mt-10 p-6">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-2">
            <span className="text-white font-bold">💳</span>
          </div>
          <h3 className="font-bold text-sm">SECURE PAYMENT</h3>
          <p className="text-xs text-gray-500">100% secure payment</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-2">
            <span className="text-white font-bold">🚚</span>
          </div>
          <h3 className="font-bold text-sm">FREE SHIPPING</h3>
          <p className="text-xs text-gray-500">For Orders Above Tk. 3000</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-2">
            <span className="text-white font-bold">🌱</span>
          </div>
          <h3 className="font-bold text-sm">ONLINE NURSERY</h3>
          <p className="text-xs text-gray-500">Bangladesh's #1 Plants Shop</p>
        </div>
      </div>

      <footer className="w-full bg-gray-100 p-4 mt-auto">
        <div className="flex flex-col items-center">
          <p className="text-sm font-medium text-gray-600">
            SHOW US SOME ❤️ ON SOCIAL MEDIA
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-600 hover:text-green-500">
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <a href="#" className="text-gray-600 hover:text-green-500">
              <i className="fab fa-youtube"></i> YouTube
            </a>
            <a href="#" className="text-gray-600 hover:text-green-500">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="#" className="text-gray-600 hover:text-green-500">
              <i className="fab fa-tiktok"></i> TikTok
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OrderTrack;
