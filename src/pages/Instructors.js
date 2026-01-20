import { useEffect, useState } from "react";
import api from "../services/api";
import InstructorCard from "../components/InstructorCard";


export default function Instructors() {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadInstructors = async () => {
      try {
        const res = await api.get("/instructors");
        setInstructors(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadInstructors();
  }, []);

  if (loading) return <p className="loading">Loading instructors...</p>;

  return (
    <div className="instructors-page">
      <h2>Our Expert Instructors</h2>

      <div className="instructors-grid">
        {instructors.length > 0 ? (
          instructors.map(inst => (
            <InstructorCard key={inst._id} instructor={inst} />
          ))
        ) : (
          <p>No instructors found</p>
        )}
      </div>
    </div>
  );
}
