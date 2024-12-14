const UpdateInventory = () => {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Update Inventory</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">Product ID</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter product ID"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">New Quantity</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter new quantity"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Update Inventory
          </button>
        </form>
      </div>
    );
  };
  
  export default UpdateInventory;