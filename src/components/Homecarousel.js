import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Learn From Experts",
    desc: "Top instructors, real-world skills",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    title: "Upgrade Your Career",
    desc: "Industry-ready online courses",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "Study Anytime Anywhere",
    desc: "Flexible learning on any device",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  },
];

export default function HomeCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`carousel-slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="carousel-overlay">
            <h1>{slide.title}</h1>
            <p>{slide.desc}</p>
            {/* <button className="carousel-btn">Explore Courses</button> */}
            <Link className="carousel-btn" to="/courses">Browse Courses</Link>
          </div>
        </div>
      ))}

      {/* ARROWS */}
      <button
        className="carousel-arrow left"
        onClick={() =>
          setIndex((index - 1 + slides.length) % slides.length)
        }
      >
        ❮
      </button>

      <button
        className="carousel-arrow right"
        onClick={() => setIndex((index + 1) % slides.length)}
      >
        ❯
      </button>

      {/* DOTS */}
      <div className="carousel-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
