// import { Link } from "react-router-dom";

// export default function CourseCard({ course }) {
//   return (
//     <div className="card">
//       <img src={course.image} />
//       <h3>{course.title}</h3>
//       <Link to={`/course/${course._id}`}>View</Link>
//     </div>
//   );
// }


import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <div className="course-card">
      <div className="course-img">
        <img src={course.image} alt={course.title} />
        {course.category && (
          <span className="course-badge">{course.category}</span>
        )}
      </div>

      <div className="course-content">
        <h3>{course.title}</h3>

       
        
      <Link to={`/course/${course._id}/register`} className="btn-enroll-sm">
        Enroll
      </Link>
      </div>
    </div>
  );
}
