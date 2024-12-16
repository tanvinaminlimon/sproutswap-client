
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";


const Details = () => {


    const [selectedPlan, setSelectedPlan] = useState("New to planting");
    const [selectedColor, setSelectedColor] = useState("Horti white");
    const [quantity, setQuantity] = useState(1);
  

    const { id } = useParams(); // Get the dynamic ID from the route
  const [gift, setGift] = useState([]);

  useEffect(() => {
    const fetchGiftDetails = async () => {
      try {
        const response = await fetch("/data.json"); // Replace with your JSON file path
        const data = await response.json();
        const selectedGift = data.find((item) => item.id === parseInt(id));
        setGift(selectedGift);
      } catch (error) {
        console.error("Error fetching gift details:", error);
      }
    };

    fetchGiftDetails();
  }, [id]);

    
  
 
  const handleQuantityChange = (type) => {
    setQuantity((prevQuantity) =>
      type === "increase" ? prevQuantity + 1 : Math.max(1, prevQuantity - 1)
    );
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) to cart with Plan: ${selectedPlan} and Color: ${selectedColor}`);
  };

  return (
    <div className="container mx-auto p-10">
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Product Image */}
        <div>
          <img
            src={gift.image}// Replace with actual image path
            alt="Plant Subscription"
            className="w-full h-[500px] rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div>
          {/* Title and Price */}
          <h2 className="text-3xl font-semibold text-gray-800">
            {gift.name}
          </h2>
          <p className="text-xl text-[#88976c] mt-2">{gift.price} Tk</p>
          <p className="text-gray-500 mt-1">Delivery every 3 months</p>

          {/* Plan Options */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">Plan Options:</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {["New to planting", "Pet-friendly", "Rare plants", "Horti's Pick"].map(
                (plan) => (
                  <button
                    key={plan}
                    className={`px-4 py-2 rounded-md border ${
                      selectedPlan === plan
                        ? "bg-[#728156] text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                    onClick={() => setSelectedPlan(plan)}
                  >
                    {plan}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Color Options */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">Color:</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Horti white", "Plain terracotta", "Horti multi"].map((color) => (
                <button
                  key={color}
                  className={`px-4 py-2 rounded-md border ${
                    selectedColor === color
                      ? "bg-[#728156] text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">Quantity:</h3>
            <div className="flex items-center mt-2">
              <button
                className="px-4 py-2 border bg-gray-100 text-gray-600 rounded-l-md"
                onClick={() => handleQuantityChange("decrease")}
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 text-center border-t border-b"
              />
              <button
                className="px-4 py-2 border bg-gray-100 text-gray-600 rounded-r-md"
                onClick={() => handleQuantityChange("increase")}
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            className="w-full mt-6 bg-[#728156] text-white py-3 rounded-md text-lg font-semibold"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-gray-800">
          Get a Plant Every 3 Months
        </h3>
        <p className="text-gray-600 mt-4">
          This plan is perfect for every kind of plant parent—whether you are
          new to indoor gardening or just looking to slowly grow your collection
          with unique plants.
        </p>
        <p className="text-gray-600 mt-4">
          You’ll receive a plant with a 6" clay pot and saucer every 3 months.
          Some months we send fun exercises along with planting tools/accessories.
        </p>

        {/* Shipping Information */}
        <h3 className="text-2xl font-semibold text-gray-800 mt-8">Shipping</h3>
        <p className="text-gray-600 mt-4">
          Your first plant will ship immediately. We ship plants Nationwide and
          shipping cost is calculated during checkout. Plants are sensitive
          creatures, and we have many years of experience packing each kit with
          a lot of care. All packages are sent through USPS or UPS.
        </p>
        <p className="text-gray-600 mt-4">
          Please check our <a href="#" className="text-[#728156]underline">FAQs</a> for more details on shipping.
        </p>
      </div>
    </div>
  );
};

export default Details;
