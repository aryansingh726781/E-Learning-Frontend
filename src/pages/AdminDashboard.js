
import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    users: 0,
    courses: 0,
    blogs: 0,
    instructors: 0,
  });

  useEffect(() => {
    api.get("/admin/stats")
      .then(res => setStats(res.data))
      .catch(() => console.log("Failed to load stats"));
  }, []);

  return (
    <div className="admin-container">

      {/* HEADER */}
      <h1 className="admin-title">📊 Admin Dashboard</h1>

      {/* STATS */}
      <div className="admin-stats">
        <StatCard title="Users" value={stats.users} />
        <StatCard title="Courses" value={stats.courses} />
        <StatCard title="Instructors" value={stats.instructors} />
        <StatCard title="Blogs" value={stats.blogs} />
      </div>

      {/* MANAGEMENT SECTIONS */}
      <div className="admin-crud">
        <ManageCard
          title="Courses"
          link="/admincourse"
          icon="📚"
        />

        <ManageCard
          title="Instructors"
          link="/adminInstructor"
          icon="👨‍🏫"
        />

        <ManageCard
          title="Blogs"
          link="/adminBlog"
          icon="📝"
        />
        <ManageCard
          title="AllEnrollments"
          link="/adminenrollments"
          icon=" 📋"
        />
        <ManageCard
          title="Contact Messages"
          link="/adminecontact"
          icon=" 📩"
        />
      </div>

    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

const StatCard = ({ title, value }) => (
  <div className="stat-card">
    <h3>{title}</h3>
    <p>{value}</p>
  </div>
);

const ManageCard = ({ title, link, icon }) => (
  <div className="crud-card">
    <h3>{icon} {title}</h3>

    <Link to={link} className="btn-manage">
      Manage {title}
    </Link>
  </div>
);
