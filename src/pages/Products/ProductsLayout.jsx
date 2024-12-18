// import React from 'react'
// import { Outlet } from 'react-router-dom'

// function ProductsLayout() {
//   return (
//     <div>
        
//     </div>
//   )
// }

// export default ProductsLayout

// src/pages/Products/ProductsLayout.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from './Header';

const ProductsLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default ProductsLayout;
