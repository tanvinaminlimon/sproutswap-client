import React from "react";

const SalesReports = () => {
  // Sample sales data for 10 products
  const salesData = [
    { product: "Product A", quantity: 50, revenue: 5000 },
    { product: "Product B", quantity: 30, revenue: 3009 },
    { product: "Product C", quantity: 70, revenue: 70087 },
    { product: "Product D", quantity: 40, revenue: 40066 },
    { product: "Product E", quantity: 20, revenue: 20077 },
    { product: "Product F", quantity: 60, revenue: 60767},
    { product: "Product G", quantity: 35, revenue: 36750 },
    { product: "Product H", quantity: 80, revenue: 86600 },
    { product: "Product I", quantity: 25, revenue: 26750 },
    { product: "Product J", quantity: 90, revenue: 90770 },
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
                <td className="px-6 py-3 border border-gray-700">{item.revenue}tk</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesReports;
