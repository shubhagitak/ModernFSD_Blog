"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Blog = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      router.push("/userlogin");
    }

    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(storedBlogs);
  }, []);

  return (
    <>
      <h1>Blog Page</h1>
      <div className="blog-container">
        {blogs.length === 0 && <p>No blogs available.</p>}
        {blogs.map((item, index) => (
          <Link href={`/blog/${index}`} key={index}>
            <div className="blog-item">
              {item.imageUrl && <img src={item.imageUrl} alt={item.title} style={{ width: "100px" }} />}
              <h2>{item.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Blog;
