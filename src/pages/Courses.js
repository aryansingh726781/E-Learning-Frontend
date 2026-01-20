import { useEffect, useState } from "react";
import api from "../services/api";
import CourseCard from "../components/CourseCard";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api.get("/courses").then(res => setCourses(res.data));
  }, []);

  return (
    <div className="course-grid">
      {courses.map(course => (
        <CourseCard key={course._id} course={course} />
      ))}
    </div>
  );
}
