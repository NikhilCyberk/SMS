import React, { useEffect } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { FaHome, FaPlus, FaList, FaUserPlus, FaUsers } from "react-icons/fa";

const SideB = () => {
  return (
    //     <aside className="fixed top-[4rem] left-0 h-screen w-64 bg-gradient-to-r from-purple-400 to-blue-500 border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
    //     <div className="flex flex-col p-5">
    //       <Link to="/">
    //         <img
    //           className="w-auto h-10 mb-5"
    //           src="https://merakiui.com/images/logo.svg"
    //           alt="Logo"
    //         />
    //       </Link>

    //       <nav className="mt-6">
    //         <div className="space-y-3">
    //           {/* Dashboard Link */}
    //           <NavLink
    //             to="/admin-dashboard"
    //             activeClassName="text-white bg-blue-700 dark:bg-gray-800"
    //             className="flex items-center px-4 py-3 text-gray-100 transition-colors duration-300 transform rounded-lg hover:text-white hover:bg-blue-600"
    //           >
    //             <span className="mx-2 text-sm font-medium">Dashboard</span>
    //           </NavLink>

    //           {/* Add Class Link */}
    //           <NavLink
    //             to="/admin-add-class"
    //             activeClassName="text-white bg-blue-700 dark:bg-gray-800"
    //             className="flex items-center px-4 py-3 text-gray-100 transition-colors duration-300 transform rounded-lg hover:text-white hover:bg-blue-600"
    //           >
    //             <span className="mx-2 text-sm font-medium">Add Class</span>
    //           </NavLink>

    //           <NavLink
    //             to="/admin-list-class/:id"
    //             activeClassName="text-white bg-blue-700 dark:bg-gray-800"
    //             className="flex items-center px-4 py-3 text-gray-100 transition-colors duration-300 transform rounded-lg hover:text-white hover:bg-blue-600"
    //           >
    //             <span className="mx-2 text-sm font-medium">List Class</span>
    //           </NavLink>

    //           <NavLink
    //             to="/admin-add-student"
    //             activeClassName="text-white bg-blue-700 dark:bg-gray-800"
    //             className="flex items-center px-4 py-3 text-gray-100 transition-colors duration-300 transform rounded-lg hover:text-white hover:bg-blue-600"
    //           >
    //             <span className="mx-2 text-sm font-medium">Add Student</span>
    //           </NavLink>
    //           <NavLink
    //             to="/admin-list-student"
    //             activeClassName="text-white bg-blue-700 dark:bg-gray-800"
    //             className="flex items-center px-4 py-3 text-gray-100 transition-colors duration-300 transform rounded-lg hover:text-white hover:bg-blue-600"
    //           >
    //             <span className="mx-2 text-sm font-medium">List Student</span>
    //           </NavLink>
    //         </div>
    //       </nav>
    //     </div>
    //   </aside>

    <aside className="fixed top-0 left-0 h-full w-64 bg-blue-500 border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
      <div className="flex flex-col p-5">
        <Link to="/">
          <img
            className="w-auto h-10 mb-5"
            src="https://merakiui.com/images/logo.svg"
            alt="Logo"
          />
        </Link>

        <nav className="mt-6">
          <div className="space-y-3">
            {/* Dashboard Link */}
            <NavLink
              to="/admin-dashboard"
              activeClassName="text-white bg-blue-700 dark:bg-gray-800"
              className="flex items-center px-4 py-3 text-gray-100 transition-colors duration-300 transform rounded-lg hover:text-white hover:bg-blue-600"
            >
              <FaHome className="mx-2 text-lg" />
              <span className="text-sm font-medium">Dashboard</span>
            </NavLink>

            {/* Add Class Link */}
            <NavLink
              to="/admin-add-class"
              activeClassName="text-white bg-blue-700 dark:bg-gray-800"
              className="flex items-center px-4 py-3 text-gray-100 transition-colors duration-300 transform rounded-lg hover:text-white hover:bg-blue-600"
            >
              <FaPlus className="mx-2 text-lg" />
              <span className="text-sm font-medium">Add Class</span>
            </NavLink>

            <NavLink
              to="/admin-list-class/:id"
              activeClassName="text-white bg-blue-700 dark:bg-gray-800"
              className="flex items-center px-4 py-3 text-gray-100 transition-colors duration-300 transform rounded-lg hover:text-white hover:bg-blue-600"
            >
              <FaList className="mx-2 text-lg" />
              <span className="text-sm font-medium">List Class</span>
            </NavLink>

            <NavLink
              to="/admin-add-student"
              activeClassName="text-white bg-blue-700 dark:bg-gray-800"
              className="flex items-center px-4 py-3 text-gray-100 transition-colors duration-300 transform rounded-lg hover:text-white hover:bg-blue-600"
            >
              <FaUserPlus className="mx-2 text-lg" />
              <span className="text-sm font-medium">Add Student</span>
            </NavLink>

            <NavLink
              to="/admin-list-student"
              activeClassName="text-white bg-blue-700 dark:bg-gray-800"
              className="flex items-center px-4 py-3 text-gray-100 transition-colors duration-300 transform rounded-lg hover:text-white hover:bg-blue-600"
            >
              <FaUsers className="mx-2 text-lg" />
              <span className="text-sm font-medium">List Student</span>
            </NavLink>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default SideB;
