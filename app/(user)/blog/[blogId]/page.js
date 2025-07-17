"use client";

import { useEffect, useState } from "react";

const BlogId = ({ params }) => {
  const id = parseInt(params.blogId, 10);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlog(storedBlogs[id]);
  }, [id]);

  if (!blog) return <p>Blog not found.</p>;

  return (
    <div className="detail-container">
      <h1>{blog.title}</h1>
      {blog.imageUrl && <img src={blog.imageUrl} alt={blog.title} className="detail-image" />}
      <p>{blog.description}</p>
    </div>
  );
};

export default BlogId;
