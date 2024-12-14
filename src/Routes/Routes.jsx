// import {
//     createBrowserRouter,
//   } from "react-router-dom";
// import Main from "../Layout/Main";
// import Home from "../pages/Home/Home/Home";
// import Dashboard from "../Dashboard/Dashboard";
// import Details from "../pages/Details/Details";
// import SimpleLayout from "../pages/SimpleLayout/SimpleLayout";
// import AddProduct from "../VendorManagement/AddProduct";


//   export const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Main></Main>,

//       children: [
//         {
//             path: '/',
//             element: <Home></Home>,
            
//         },
//         // {
//         //   path: '/dashboard',
//         //   element: <Dashboard></Dashboard>,
//         // }
//       ],

//     },

//     {
//       path: "/",
//       element: <SimpleLayout></SimpleLayout>, // Simple layout without NavBar and Footer
//       children: [
//         {
//           path: "/dashboard",
//           element: <Dashboard></Dashboard>,
//            // Dashboard page
//         },
//         {
//           path: "/details/:id",
//           element: <Details></Details>, // Details page
//         },
//       ],
//     },
//   ]);



import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Dashboard from "../Dashboard/Dashboard";

import Details from "../pages/Details/Details";
import SimpleLayout from "../pages/SimpleLayout/SimpleLayout";

import AddProduct from "../VendorManagement/AddProduct";
import UpdateInventory from "../VendorManagement/UpdateInventory";
import SalesReports from "../VendorManagement/SalesReports";

export const router = createBrowserRouter([
  {
      path: "/",
      element: <Main></Main>,
      children: [
          {
              path: "/",
              element: <Home></Home>,
          },
      ],
  },
  {
      path: "/",
      element: <SimpleLayout></SimpleLayout>,
      children: [
          {
              path: "/dashboard",
              element: <Dashboard></Dashboard>,
              children: [
                  {
                      path: "addproduct",
                      element: <AddProduct></AddProduct>,
                  },
                  {
                      path: "salesreport",
                      element: <SalesReports></SalesReports>,
                  },
                  {
                      path: "updateinventory",
                      element: <UpdateInventory></UpdateInventory>,
                  },
              ],
          },
          {
              path: "/details/:id",
              element: <Details></Details>,
          },
      ],
  },
]);
