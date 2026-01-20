import React, { useState } from 'react';
import api from "../services/api";

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({ title: "", image: "", content: "" });

  
   const load =async ()=>{
   const res=await api.get("/blogs");
   setBlogs(res.data);

  }
 
  

  const submit = async () => {
    await api.post("/blogs", form);
    load();
  };

  const remove = async (id) => {
    await api.delete(`/blogs/${id}`);
    load();
  };

  return (
    <div>
      <h2>Blogs</h2>

      <input placeholder="Title" onChange={e => setForm({ ...form, title: e.target.value })} />
      <input placeholder="Image URL" onChange={e => setForm({ ...form, image: e.target.value })} />
      <textarea placeholder="Content" onChange={e => setForm({ ...form, content: e.target.value })} />
      <button onClick={submit}>Add Blog</button>

      {blogs.map(b => (
        <div key={b._id}>
          {b.title}
          <button onClick={() => remove(b._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
