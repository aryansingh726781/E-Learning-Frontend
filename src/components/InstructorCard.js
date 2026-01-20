export default function InstructorCard({ instructor }) {
  return (
    <div className="instructor-card">
      <img src={instructor.image} alt={instructor.name} />
      <h4>{instructor.name}</h4>
      <p>{instructor.skill}</p>
    </div>
  );
}
