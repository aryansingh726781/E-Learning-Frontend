import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";


export default function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const loadBlog = async () => {
      const res = await api.get(`/blogs/${id}`);
      setBlog(res.data);
    };
    loadBlog();
  }, [id]);

  if (!blog) return <p className="loading">Loading...</p>;

  return (
    <div className="blog-details">
      <img src={blog.image} alt={blog.title} />
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
}
