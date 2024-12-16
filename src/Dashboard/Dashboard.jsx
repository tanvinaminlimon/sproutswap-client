import { NavLink, Outlet } from "react-router-dom";
import DashboardNavbar from "../pages/DashboardNavbar/DashboardNavbar";


function Dashboard() {
  return (
    <div className='max-w-screen-xl m-auto'>
         <DashboardNavbar></DashboardNavbar>
          
         <Outlet></Outlet>

    </div>
  )
};

export default Dashboard;


