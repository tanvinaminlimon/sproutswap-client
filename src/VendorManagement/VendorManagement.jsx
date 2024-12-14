import AddProduct from "./AddProduct";
import SalesReports from "./SalesReports";
import UpdateInventory from "./UpdateInventory";


const VendorManagement = () => {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Vendor Management</h1>
        <AddProduct></AddProduct>
        <UpdateInventory></UpdateInventory>
        <SalesReports></SalesReports>
      </div>
    );
  };