const AddProduct = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Add Product</h2>
        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-white font-medium">Product Name</label>
            <input
              type="text"
              className="w-full border border-gray-600 rounded-lg p-3 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product name"
            />
          </div>
          <div>
            <label className="block mb-2 text-white font-medium">Price</label>
            <input
              type="number"
              className="w-full border border-gray-600 rounded-lg p-3 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter price"
            />
          </div>
          <div>
            <label className="block mb-2 text-white font-medium">Category</label>
            <input
              type="text"
              className="w-full border border-gray-600 rounded-lg p-3 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter category"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
