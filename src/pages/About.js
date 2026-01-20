

export default function About() {
  return (
    <div className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Our E-Learning Platform</h1>
          <p>
            Learn anytime, anywhere with expert-led courses designed to help you
            grow skills, build confidence, and achieve your career goals.
          </p>
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

      {/* STATS */}
      <section className="about-stats">
        <div className="stat-box">
          <h3>10K+</h3>
          <p>Students</p>
        </div>
        <div className="stat-box">
          <h3>200+</h3>
          <p>Courses</p>
        </div>
        <div className="stat-box">
          <h3>50+</h3>
          <p>Instructors</p>
        </div>
        <div className="stat-box">
          <h3>4.8 ⭐</h3>
          <p>Average Rating</p>
        </div>
      </section>
    </div>
  );
}
