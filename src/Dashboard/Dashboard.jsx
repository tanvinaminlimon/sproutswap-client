import AddProduct from "../VendorManagement/AddProduct";
import SalesReports from "../VendorManagement/SalesReports";
import UpdateInventory from "../VendorManagement/UpdateInventory";


function Dashboard() {
  return (
    <div className='max-w-screen-xl h-[700px] m-auto'>
        
       <h1>Dashboard</h1>
       <AddProduct></AddProduct>
       <UpdateInventory></UpdateInventory>
       <SalesReports></SalesReports>

    </div>
  )
};

export default Dashboard;