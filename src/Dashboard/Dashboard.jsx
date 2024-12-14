import AddProduct from "../VendorManagement/AddProduct";
import SalesReports from "../VendorManagement/SalesReports";
import UpdateInventory from "../VendorManagement/UpdateInventory";


function Dashboard() {
  return (
    <div className='max-w-screen-xl m-auto'>

       <AddProduct></AddProduct>
       <UpdateInventory></UpdateInventory>
       <SalesReports></SalesReports>

    </div>
  )
};

export default Dashboard;