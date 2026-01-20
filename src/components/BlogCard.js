import { Link } from "react-router-dom";


export default function BlogCard({ blog }) {
  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} />
      <div className="blog-card-body">
        <h4>{blog.title}</h4>
        <Link to={`/blog/${blog._id}`} className="read-btn">
          Read More →
        </Link>
      </div>
    </div>
  );
}


