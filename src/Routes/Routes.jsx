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



// import {
//   createBrowserRouter,
// } from "react-router-dom";
// import Main from "../Layout/Main";
// import Home from "../pages/Home/Home/Home";
// import Dashboard from "../Dashboard/Dashboard";

// import Details from "../pages/Details/Details";
// import SimpleLayout from "../pages/SimpleLayout/SimpleLayout";

// import AddProduct from "../VendorManagement/AddProduct";
// import UpdateInventory from "../VendorManagement/UpdateInventory";
// import SalesReports from "../VendorManagement/SalesReports";

// export const router = createBrowserRouter([
//   {
//       path: "/",
//       element: <Main></Main>,
//       children: [
//           {
//               path: "/",
//               element: <Home></Home>,
//           },
//       ],
//   },
//   {
//       path: "/",
//       element: <SimpleLayout></SimpleLayout>,
//       children: [
//           {
//               path: "/dashboard",
//               element: <Dashboard></Dashboard>,
//               children: [
//                   {
//                       path: "addproduct",
//                       element: <AddProduct></AddProduct>,
//                   },
//                   {
//                       path: "salesreport",
//                       element: <SalesReports></SalesReports>,
//                   },
//                   {
//                       path: "updateinventory",
//                       element: <UpdateInventory></UpdateInventory>,
//                   },
//               ],
//           },
//           {
//               path: "/details/:id",
//               element: <Details></Details>,
//           },
//       ],
//   },
// ]);



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
import Products from "../pages/Products/Products";
import ProductsLayout from "../pages/Products/ProductsLayout";
import Shop from "../pages/Products/Shop";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import PlantSub from "../pages/Products/PlantSub";
import Cart from "../pages/Products/Cart";
import OrderTrack from "../pages/OderTrack/OrderTrack";
import Gallery from "../pages/Gallery/Gallery";




  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/gallery",
          element: <Gallery></Gallery>,
        },
      ],
    },
    {
      path: "/products",
      element: <ProductsLayout></ProductsLayout>,
      children: [
        {
          index: true, // Default route for /products
          element: <Products></Products>,
        },
        
        
      ],
    },
    {
      path: "/",
      element: <SimpleLayout></SimpleLayout>,
      children: [
        {
          path: "dashboard",
          element: <Dashboard></Dashboard>,
          children: [
            {
              index: true, // Set AddProduct as the default child for /dashboard
              element: <AddProduct></AddProduct>,
            },
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
        {
            path:"/shop",
            element: <Shop></Shop>,
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/signup',
          element: <Signup></Signup>,
        },
        {
          path:"/plantsub",
          element:<PlantSub></PlantSub>
        },
        {
          path:'/cart',
          element: <Cart></Cart>
        },
        {
          path:'/ordertrack',
          element: <OrderTrack></OrderTrack>
        },
      ],
    },
  ]);
  