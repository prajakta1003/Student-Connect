import React from "react";
import "../css/Blog.css";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "5 Tips to Boost Your Academic Productivity",
      author: "Admin",
      date: "April 10, 2025",
      description:
        "From time management to smart note-taking, explore effective ways to stay ahead in your studies.",
    },
    {
      id: 2,
      title: "Building Your Resume as a Student",
      author: "Career Team",
      date: "March 25, 2025",
      description:
        "Discover how to highlight your skills and achievements, even with limited experience.",
    },
    {
      id: 3,
      title: "Best Collaboration Tools for Group Projects",
      author: "Student Team",
      date: "March 10, 2025",
      description:
        "Working with peers? Here are the top tools that make collaboration seamless and fun.",
    },
  ];

  return (
    <div className="blog-page">
      <div className="blog-header">
        <h1>📚 Student Blog</h1>
        <p>Stay updated with the latest tips, guides, and inspiration curated for students like you.</p>
      </div>

      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <h2>{blog.title}</h2>
            <div className="blog-meta">
              <span>By {blog.author}</span> | <span>{blog.date}</span>
            </div>
            <p>{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
