"use client";

import React, { useState, useEffect } from 'react';

const Create = () => {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', imageUrl: '' });
  const [isEditing, setIsEditing] = useState(null);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(storedBlogs);
  }, []);

  const saveToLocal = (updatedBlogs) => {
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let updated;
    if (isEditing !== null) {
      updated = blogs.map((item, index) =>
        index === isEditing ? form : item
      );
    } else {
      updated = [...blogs, form];
    }
    saveToLocal(updated);
    setForm({ title: '', description: '', imageUrl: '' });
    setIsEditing(null);
  };

  const handleEdit = (index) => {
    setForm(blogs[index]);
    setIsEditing(index);
  };

  const handleDelete = (index) => {
    const updated = blogs.filter((_, i) => i !== index);
    saveToLocal(updated);
    setForm({ title: '', description: '', imageUrl: '' });
    setIsEditing(null);
  };

  return (
    <div className="create-container">
      <h1>Admin Create Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={form.title}
          placeholder="Title"
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          value={form.description}
          placeholder="Description"
          onChange={handleChange}
          required
        />
        <input
          name="imageUrl"
          value={form.imageUrl}
          placeholder="Image URL"
          onChange={handleChange}
        />
        <button type="submit">{isEditing !== null ? 'Update' : 'Add'} Blog</button>
      </form>

      <div className="blog-list">
        {blogs.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {item.imageUrl && <img src={item.imageUrl} alt="blog" style={{ width: "100px" }} />}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Create;
