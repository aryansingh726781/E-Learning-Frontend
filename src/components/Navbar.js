import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* LOGO */}
        <Link to="/" className="logo">
          Edu<span>Learn</span>
        </Link>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </div>

        {/* LINKS */}
        <nav className={`nav-links ${open ? "open" : ""}`}>
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/courses" onClick={() => setOpen(false)}>Courses</NavLink>
          <NavLink to="/instructors" onClick={() => setOpen(false)}>Instructors</NavLink>
          <NavLink to="/blogs" onClick={() => setOpen(false)}>Blogs</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>

          {user?.role === "admin" && (
            <NavLink to="/admin" onClick={() => setOpen(false)}>
              Dashboard
            </NavLink>
          )}

          {/* MOBILE AUTH */}
          {!user ? (
            <div className="mobile-auth">
              <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
              <Link to="/register" onClick={() => setOpen(false)}>Register</Link>
            </div>
          ) : (
            <div className="mobile-auth">
              <span>👤 {user.name}</span>
              <button onClick={logout}>Logout</button>
            </div>
          )}
        </nav>

        {/* DESKTOP AUTH */}
        <div className="nav-auth desktop-only">
          {!user ? (
            <>
              <Link to="/login" className="btn-outline">Login</Link>
              <Link to="/register" className="btn-primary">Register</Link>
            </>
          ) : (
            <div className="user-box">
              <span>👤 {user.name}</span>
              <button onClick={logout} className="btn-logout">Logout</button>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}
