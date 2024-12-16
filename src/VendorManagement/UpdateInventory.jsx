const UpdateInventory = () => {
  return (
    <div className="min-h-screen bg-[#B6C99B] flex items-center justify-center">
      <div className="bg-[#728156] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Update Inventory</h2>
        <form className="space-y-6">
          {/* Product ID Input */}
          <div>
            <label className="block mb-2 text-white font-medium">Product ID</label>
            <input
              type="text"
              className="w-full border border-gray-600 rounded-lg p-3 bg-[#98A77c] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter product ID"
            />
          </div>

          {/* New Quantity Input */}
          <div>
            <label className="block mb-2 text-white font-medium">New Quantity</label>
            <input
              type="number"
              className="w-full border border-gray-600 rounded-lg p-3 bg-[#98A77c] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter new quantity"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#98A77c] text-white px-4 py-3 rounded-lg font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            Update Inventory
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateInventory;
