import { useState } from "react";
import api from "../services/api";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/contact", form);
      alert("✅ Message sent successfully!");
      setForm({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      });
    } catch (err) {
      alert("❌ Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Contact Us</h1>
          <p>
            Have questions or need help? Reach out to us and we’ll get back to you
            shortly.
          </p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <div className="contact-page">
        <div className="contact-card">
          <h2>📞 Get in Touch</h2>
          <p>Fill out the form below and our team will contact you.</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
