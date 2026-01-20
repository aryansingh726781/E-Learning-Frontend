import { useEffect, useState } from "react";
import api from "../services/api";

export default function AdminEnrollments() {
  const [enrolls, setEnrolls] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadEnrolls = async () => {
    try {
      const res = await api.get("/admin/enrolls");
      setEnrolls(res.data);
    } catch (err) {
      alert("Failed to load enrollments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEnrolls();
  }, []);

  const removeEnroll = async (id) => {
    if (!window.confirm("Delete this enrollment?")) return;

    await api.delete(`/admin/enrolls/${id}`);
    loadEnrolls();
  };

  if (loading) return <p className="loading">Loading enrollments...</p>;

  return (
    <div className="admin-page">
      <h1>📋 Course Enrollments</h1>

      <div className="table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Course</th>
              <th>Enrolled On</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {enrolls.map((e, index) => (
              <tr key={e._id}>
                <td>{index + 1}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
                <td>{e.course?.title}</td>
                <td>{new Date(e.createdAt).toLocaleDateString()}</td>
                <td>
                  <button
                    className="btn-delete"
                    onClick={() => removeEnroll(e._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {enrolls.length === 0 && <p>No enrollments found.</p>}
      </div>
    </div>
  );
}
