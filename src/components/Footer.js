import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      {/* TOP SECTION */}
      <div className="footer-top">
        <div className="footer-box brand">
          <h2>EduLearn</h2>
          <p>
            Learn anytime, anywhere with expert-led courses designed to boost
            your skills and career.
          </p>
        </div>

        <div className="footer-box">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-box">
          <h4>Support</h4>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Help Center</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>

        <div className="footer-box">
          <h4>Contact</h4>
          <p>📧 support@edulearn.com</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 India</p>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} EduLearn. All rights reserved.</p>
      </div>
    </footer>
  );
}
