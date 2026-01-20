// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import api from "../services/api";

// export default function CourseRegister() {
//   const { id } = useParams(); // course id
//   const navigate = useNavigate();
//   const [course, setCourse] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const user = JSON.parse(localStorage.getItem("user"));

//   useEffect(() => {
//     api.get(`/courses/${id}`).then(res => setCourse(res.data));
//   }, [id]);

//   const enroll = async () => {
//     try {
//       setLoading(true);
//       await api.post(`/enroll/${id}`);
//       alert("🎉 Successfully enrolled!");
//       navigate("/courses");
//     } catch (err) {
//       alert("Please login to enroll");
//       navigate("/login");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!course) return <p className="loading">Loading course...</p>;

//   return (
//     <div className="enroll-container">
//       <div className="enroll-card">
//         <img src={course.image} alt={course.title} />
//         <h2>{course.title}</h2>
//         <p>{course.description}</p>
//         <p className="category">Category: {course.category}</p>

//         {user ? (
//           <button onClick={enroll} disabled={loading} className="btn-enroll">
//             {loading ? "Enrolling..." : "Enroll Now"}
//           </button>
//         ) : (
//           <button onClick={() => navigate("/login")} className="btn-enroll">
//             Login to Enroll
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }





import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

export default function CourseRegister() {
  const { id } = useParams(); // course id
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    api.get(`/courses/${id}`).then(res => setCourse(res.data));
  }, [id]);

  const enroll = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await api.post(`/enroll/${id}`, {
        name: form.name,
        email: form.email,
        phone: form.phone
      });

      alert("🎉 Successfully enrolled!");
      navigate("/courses");
    } catch (err) {
      alert("Please login to enroll");
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  if (!course) return <p className="loading">Loading course...</p>;

  return (
    <div className="enroll-container">
      <div className="enroll-card">
        <img src={course.image} alt={course.title} />

        <h2>{course.title}</h2>
        <p>{course.description}</p>
        <p className="category">Category: {course.category}</p>

        {user ? (
          <form onSubmit={enroll} className="enroll-form">
            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
              required
            />

            <button type="submit" className="btn-enroll" disabled={loading}>
              {loading ? "Enrolling..." : "Enroll Now"}
            </button>
          </form>
        ) : (
          <button onClick={() => navigate("/login")} className="btn-enroll">
            Login to Enroll
          </button>
        )}
      </div>
    </div>
  );
}
