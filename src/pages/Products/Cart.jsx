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
    </div>
  );
};

export default Cart;
