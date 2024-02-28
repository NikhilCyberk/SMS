import React from "react";
import SideB from "./SideB";

const Topbar = () => {
  return (
    // <>
    //   {localStorage.getItem("token") &&
    //     localStorage.getItem("role") === "Admin" && (
    //       <div>
    //         <div className="bg-gray-900 text-white p-4 flex justify-between items-center fixed top-0 left-0 w-screen z-10">
    //           <p className="text-xl font-semibold">Admin Dashboard</p>
    //           <button
    //             onClick={() => {
    //               localStorage.clear();
    //               window.location.reload();
    //             }}
    //             className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
    //           >
    //             Log Out
    //           </button>
    //         </div>
    //         <SideB />
    //       </div>
    //     )}
    // </>

    <>
      {localStorage.getItem("token") &&
        localStorage.getItem("role") === "Admin" && (
          <div>
            <div className="bg-gradient-to-r from-purple-400 to-blue-500 text-white p-4 flex justify-between items-center fixed top-0 left-0 w-screen z-10">
              <p className="text-2xl font-semibold">Admin Dashboard</p>
              <button
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition-all duration-300"
              >
                Log Out
              </button>
            </div>
            <SideB />
          </div>
        )}
    </>
  );
};

export default Topbar;
