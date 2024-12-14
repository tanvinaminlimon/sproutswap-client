const AddProduct = () => {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Add Product</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">Product Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter product name"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Price</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter price"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Category</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter category"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add Product
          </button>
        </form>
      </div>
    );
  };
  
  export default AddProduct;