


import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import InstructorCard from "../components/InstructorCard";
import BlogCard from "../components/BlogCard";
import  HomeCarousel from "../components/Homecarousel";
export default function Home() {
  const [courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    api.get("/courses?limit=4").then(res => setCourses(res.data.slice(0, 4)));
    api.get("/instructors").then(res => setInstructors(res.data.slice(0, 4)));
    api.get("/blogs").then(res => setBlogs(res.data.slice(0, 4)));
  }, []);

  return (

    <div claaName=" home" >
 <div className="home  ">
<HomeCarousel/>
      {/* COURSES */}
      <section>
        <h2 className="home-heading" >Popular Courses</h2>
      <div className="course-grid">
  {courses.map(course => (
    <CourseCard key={course._id} course={course} />
  ))}
   
</div>
<div>
   <section className="hero">
      <h1>Learn Skills That Matter</h1>
      <p>Online courses from industry experts</p>
      <Link to="/courses" className="hero-btn">Browse Courses</Link>
    </section>
</div>
 

      </section>

      {/* INSTRUCTORS */}
      <section>
        <h2 className="home-heading">Top Instructors</h2>
        <div className="instructor-grid">
  {instructors.map(ins => (
    <InstructorCard key={ins._id} instructor={ins} />
  ))}
</div>
      </section>


  {/* ABOUT CONTENT */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              We are a modern e-learning platform offering high-quality courses
              across technology, business, and creative domains. Our mission is
              to make learning accessible, affordable, and effective for
              everyone.
            </p>

            <h2>Our Mission</h2>
            <p>
              To empower students with practical knowledge and industry-ready
              skills through expertly crafted courses and hands-on learning.
            </p>

            <h2>Why Choose Us?</h2>
            <ul>
              <li>✔ Expert Instructors</li>
              <li>✔ Real-World Projects</li>
              <li>✔ Lifetime Course Access</li>
              <li>✔ Beginner to Advanced Levels</li>
            </ul>
          </div>

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Online Learning"
            />
          </div>
        </div>
      </section>



      {/* BLOGS */}
      <section>
        <h2 className="home-heading">Latest Blogs</h2>
        <div className="instructor-grid">
          {blogs.map(blog => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </section>

    </div>


    </div>

   
  );
}
