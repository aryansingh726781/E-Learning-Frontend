import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import Navbar from "./components/Navbar";
import CourseCard from "./pages/Courses";
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminCourses from "./admin/AdminCourses";
import AdminInstructors from "./admin/AdminInstructors";
import AdminBlogs from "./admin/AdminBlogs";
import BlogDetails from "./pages/BlogDetails";
import CourseRegister from "./pages/CourseRegister";
import AdminEnrollments from "./admin/AdminEnrollments";
import Instructors from "./pages/Instructors";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";
import AdminContacts from "./admin/AdminContacts";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<CourseCard />} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/instructors" element={<Instructors/>} />
        <Route path="/blog/:id" element={<BlogDetails/>} />
        <Route path="/course/:id/register" element={<CourseRegister />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admincourse"
          element={
            <ProtectedRoute>
              <AdminCourses />
            </ProtectedRoute>
          }
        />
        <Route
          path="/adminInstructor"
          element={
            <ProtectedRoute>
              <AdminInstructors/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/adminBlog"
          element={
            <ProtectedRoute>
              <AdminBlogs/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/adminenrollments"
          element={
            <ProtectedRoute>
              <AdminEnrollments/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/adminecontact"
          element={
            <ProtectedRoute>
              <AdminContacts/>
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
