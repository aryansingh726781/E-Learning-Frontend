import { useEffect, useState } from "react";
import api from "../services/api";

export default function AdminCourses() {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({
    title: "",
    category: "",
    image: ""
  });

  // ✅ Load courses (safe)
  const loadCourses = async () => {
    const res = await api.get("/courses");
    setCourses(res.data);
  };
  

  // ✅ Proper useEffect
  useEffect(() => {
    loadCourses();
  }, []);

  // ✅ Create course
  const submit = async () => {
    if (!form.title || !form.category) return alert("All fields required");

    await api.post("/courses", form);
    setForm({ title: "", category: "", image: "" });
    loadCourses();
  };

  // ✅ Delete course
  const remove = async (id) => {
    await api.delete(`/courses/${id}`);
    loadCourses();
  };

  return (
    <div className="admin-container">
      <h2 className="admin-title">📚 Manage Courses</h2>

      {/* FORM */}
      <div className="admin-form">
        <input
          placeholder="Course Title"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
        />

        <input
          placeholder="Category"
          value={form.category}
          onChange={e => setForm({ ...form, category: e.target.value })}
        />

        <input
          placeholder="Image URL"
          value={form.image}
          onChange={e => setForm({ ...form, image: e.target.value })}
        />

        <button onClick={submit} className="btn-primary">
          ➕ Add Course
        </button>
      </div>

      {/* LIST */}
      <div className="admin-list">
        {courses.map(c => (
          <div key={c._id} className="admin-card">
            <img src={c.image} alt={c.title} />
            <div>
              <h4>{c.title}</h4>
              <p>{c.category}</p>
            </div>
            <button onClick={() => remove(c._id)} className="btn-danger">
              🗑 Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
