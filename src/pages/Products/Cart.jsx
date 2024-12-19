import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Drobe Kamini Plants",
      price: 280,
      quantity: 1,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "Gondhoraj Flower Plants",
      price: 60,
      quantity: 1,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      name: "Morning Glory Plants",
      price: 50,
      quantity: 1,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 4,
      name: "Abiu Fruit Tree Plant",
      price: 1350,
      quantity: 1,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 5,
      name: "Adenium Mini Plants",
      price: 480,
      quantity: 1,
      image: "https://via.placeholder.com/50",
    },
  ]);

  const [orderDetails, setOrderDetails] = useState({
    fullName: "",
    shippingAddress: "",
    paymentMethod: "",
  });

  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const getSubtotal = (price, quantity) => price * quantity;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handlePlaceOrder = () => {
    alert(`Order placed successfully!\nName: ${orderDetails.fullName}\nAddress: ${orderDetails.shippingAddress}\nPayment Method: ${orderDetails.paymentMethod}`);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="p-4 border"> </th>
            <th className="p-4 border">Product</th>
            <th className="p-4 border">Price</th>
            <th className="p-4 border">Quantity</th>
            <th className="p-4 border">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td className="p-4 border">
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 font-bold"
                >
                  &times;
                </button>
              </td>
              <td className="p-4 border">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded"
                  />
                  <span className="text-green-500 underline">{item.name}</span>
                </div>
              </td>
              <td className="p-4 border">৳ {item.price.toFixed(2)}</td>
              <td className="p-4 border">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value))
                  }
                  className="w-16 border rounded text-center"
                />
              </td>
              <td className="p-4 border">
                ৳ {getSubtotal(item.price, item.quantity).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-8 p-6 border rounded bg-gray-50">
        <h2 className="text-xl font-bold mb-4">Checkout</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label className="block mb-2 font-bold">Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={orderDetails.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold">Shipping Address:</label>
            <input
              type="text"
              name="shippingAddress"
              value={orderDetails.shippingAddress}
              onChange={handleInputChange}
              placeholder="Enter your shipping address"
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold">Payment Method:</label>
            <select
              name="paymentMethod"
              value={orderDetails.paymentMethod}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
              required
            >
              <option value="">Select Payment Method</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="Cash on Delivery">Cash on Delivery</option>
            </select>
          </div>
          <button
            type="button"
            onClick={handlePlaceOrder}
            className="w-full bg-[#728156] text-white p-3 rounded hover:bg-[#b6c99b]"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cart;