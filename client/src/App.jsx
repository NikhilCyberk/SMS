import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css'
import AdminLogin from "./components/pages/admin/AdminLogin";
import AdminSignup from "./components/pages/admin/AdminSignup";
import ForgotPassword from "./components/pages/admin/ForgotPassword";
import ResetPassword from "./components/pages/admin/ResetPassword";
import AdminDashboard from "./components/pages/dashboard/admin/AdminDashboard";

import Homepage from "./components/pages/Homepage";
import ChooseUser from "./components/pages/ChooseUser";
import AdminProfile from "./components/pages/dashboard/admin/AdminProfile";
import AddClass from "./components/pages/class/AddClass";
import Topbar from "./components/bar/Topbar";
import SideB from "./components/bar/SideB";
import ListClass from "./components/pages/class/ListClass";
import Student from "./components/pages/Student/Student";

function App() {
  return (
    <>
      <Topbar />
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chooseuser" element={<ChooseUser />} />

        <Route path="/login" element={<AdminLogin />} />
        <Route path="/signup" element={<AdminSignup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/resetPassword/:token" element={<ResetPassword />} />

        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-profile" element={<AdminProfile />} />
        <Route path="/admin-add-class" element={<AddClass />} />
        <Route path="/admin-list-class/:id" element={<ListClass />} />
        <Route path="/admin-add-student" element={<Student />} />
      </Routes>
    </>
  );
}

export default App;
