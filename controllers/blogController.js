const express = require("express");
const blogs = express.Router();
const { getAllBlogs, getBlog, createBlog, deleteBlog, updateBlog } = require("../queries/blog");


// INDEX
blogs.get("/", async (req, res) => {
    const allBlogs = await getAllBlogs();

    if (allBlogs[0]) {
      res.status(200).json(allBlogs);
    } else {
      res.status(500).json({ error: "server error" });
    }
  });

// SHOW
blogs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const blog = await getBlog(id);
  if (blog) {
    res.json(blog);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE
blogs.post("/", async (req, res) => {

  try {
    const blog = await createBlog(req.body);
    res.json(blog);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// DELETE
blogs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedBlog = await deleteBlog(id);
  if (deletedBlog.id) {
    res.status(200).json(deletedBlog);
  } else {
    res.status(404).json("Blog not found");
  }
});

// UPDATE
blogs.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedBlog = await updateBlog(id, req.body);
  res.status(200).json(updatedBlog);
});

module.exports = blogs;