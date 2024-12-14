import React from "react";

const SalesReports = () => {
  // Sample sales data for 10 products
  const salesData = [
    { product: "Product A", quantity: 50, revenue: 500 },
    { product: "Product B", quantity: 30, revenue: 300 },
    { product: "Product C", quantity: 70, revenue: 700 },
    { product: "Product D", quantity: 40, revenue: 400 },
    { product: "Product E", quantity: 20, revenue: 200 },
    { product: "Product F", quantity: 60, revenue: 600 },
    { product: "Product G", quantity: 35, revenue: 350 },
    { product: "Product H", quantity: 80, revenue: 800 },
    { product: "Product I", quantity: 25, revenue: 250 },
    { product: "Product J", quantity: 90, revenue: 900 },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Sales Reports</h2>
        <table className="table-auto w-full text-left border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="px-6 py-3 border border-blue-700">Product</th>
              <th className="px-6 py-3 border border-blue-700">Quantity Sold</th>
              <th className="px-6 py-3 border border-blue-700">Total Revenue</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"}
              >
                <td className="px-6 py-3 border border-gray-700">{item.product}</td>
                <td className="px-6 py-3 border border-gray-700">{item.quantity}</td>
                <td className="px-6 py-3 border border-gray-700">${item.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesReports;
