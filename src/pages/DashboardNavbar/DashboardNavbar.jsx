import React from "react";
import { NavLink } from "react-router-dom";

const DashboardNavbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand/Title */}
        <div className="text-xl font-bold">
          <h2>Dashboard</h2>
        </div>
        {/* Links */}
        <ul className="flex space-x-6">
        <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-semibold border-b-2 border-yellow-300"
                  : "hover:text-yellow-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="addproduct"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-semibold border-b-2 border-yellow-300"
                  : "hover:text-yellow-300"
              }
            >
              Add Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="salesreport"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-semibold border-b-2 border-yellow-300"
                  : "hover:text-yellow-300"
              }
            >
              Sales Report
            </NavLink>
          </li>
          <li>
            <NavLink
              to="updateinventory"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-semibold border-b-2 border-yellow-300"
                  : "hover:text-yellow-300"
              }
            >
              Update Inventory
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
