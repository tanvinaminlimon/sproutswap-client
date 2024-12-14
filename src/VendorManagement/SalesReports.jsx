import React from 'react';

const SalesReports = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Sales Reports</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Product</th>
            <th className="border border-gray-300 px-4 py-2">Quantity Sold</th>
            <th className="border border-gray-300 px-4 py-2">Total Revenue</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Product A</td>
            <td className="border border-gray-300 px-4 py-2">50</td>
            <td className="border border-gray-300 px-4 py-2">$500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SalesReports;