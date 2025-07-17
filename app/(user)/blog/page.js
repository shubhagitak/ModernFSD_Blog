"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const defaultBlogs = [
  {
    title: "Full Meals",
    description: "A traditional South Indian thali with rice, sambar, rasam, poriyal, and more.",
    imageUrl: "/images/image_1.png",
  },
  {
    title: "Idli Vada",
    description: "Soft idlis and crispy vadas served with coconut chutney and sambar.",
    imageUrl: "/images/image_2.png",
  },
  {
    title: "Parotta",
    description: "Flaky layered parotta served hot with spicy salna.",
    imageUrl: "/images/image_3.png",
  },
  {
    title: "Chicken Biryani",
    description: "Aromatic rice cooked with tender chicken and flavorful spices.",
    imageUrl: "/images/image_4.png",
  },
  {
    title: "Curd Rice",
    description: "Comforting curd rice garnished with mustard seeds and curry leaves.",
    imageUrl: "/images/image_5.png",
  },
  {
    title: "Egg Rice",
    description: "Fried rice tossed with scrambled eggs and mild spices.",
    imageUrl: "/images/image_6.png",
  },
  {
    title: "Noodles",
    description: "Stir-fried noodles with vegetables and sauces, Indo-Chinese style.",
    imageUrl: "/images/image_7.png",
  },
  {
    title: "Momos",
    description: "Steamed dumplings filled with veggies or meat, served with spicy dip.",
    imageUrl: "/images/image_8.png",
  },
  {
    title: "Pizza",
    description: "Cheesy and flavorful pizza loaded with toppings of your choice.",
    imageUrl: "/images/image_9.png",
  },
];

const Blog = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      router.push("/userlogin");
    }

    const storedBlogs = JSON.parse(localStorage.getItem("blogs"));
    if (storedBlogs && storedBlogs.length > 0) {
      setBlogs(storedBlogs);
    } else {
      localStorage.setItem("blogs", JSON.stringify(defaultBlogs));
      setBlogs(defaultBlogs);
    }
  }, []);

  return (
    <>
      <h1>Blog Page</h1>
      <div className="blog-container">
        {blogs.length === 0 && <p>No blogs available.</p>}
        {blogs.map((item, index) => (
          <Link href={`/blog/${index}`} key={index}>
            <div className="blog-item">
              {item.imageUrl && <img src={item.imageUrl} alt={item.title} style={{ width: "120px", borderRadius: "8px" }} />}
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Blog;
