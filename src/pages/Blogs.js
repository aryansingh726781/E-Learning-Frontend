import { useEffect, useState } from "react";
import api from "../services/api";
import BlogCard from "../components/BlogCard";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const res = await api.get("/blogs");
        setBlogs(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadBlogs();
  }, []);

  if (loading) return <p className="loading">Loading blogs...</p>;

  return (
    <div className="blogs-page">
      <h2>Latest Blogs</h2>

      <div className="blogs-grid">
        {blogs.length > 0 ? (
          blogs.map(blog => (
            <BlogCard key={blog._id} blog={blog} />
          ))
        ) : (
          <p>No blogs available</p>
        )}
      </div>
    </div>
  );
}
