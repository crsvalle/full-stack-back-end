const db = require("../db/dbConfig.js");

const getAllBlogs = async () => {
    try {
      console.log("hello")
      const allBlogs = await db.any("SELECT * FROM blogs");
      return allBlogs;
    } catch (error) {
      return error;
    }
  };

  const getBlog = async (id) => {
    try {
      const oneBlog = await db.one("SELECT * FROM blogs WHERE id=$1", id);
      return oneBlog;
    } catch (error) {
      return error;
    }
  };

const createBlog = async (blog) => {
  try {
    const newBlog = await db.one(
      "INSERT INTO blogs (title, author, image, body, type) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [blog.title, blog.author, blog.image, blog.body, blog.type]
    );
    return newBlog;
  } catch (error) {
    return error;
  }
};

const deleteBlog = async (id) => {
  try {
    const deletedBlog = await db.one(
      "DELETE FROM blogs WHERE id = $1 RETURNING *",
      id
    );
    return deletedBlog;
  } catch (error) {
    return error;
  }
};

const updateBlog = async (id, snack) => {
  try {
    const updatedBlog = await db.one(
      "UPDATE blogs SET title=$1, author=$2, image=$3, body=$4, type=$5  where id=$6 RETURNING *",
      [blog.title, blog.author, blog.image, blog.body, blog.type, id]
    );
    return updatedBlog;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllBlogs,
  getBlog,
  createBlog,
  deleteBlog,
  updateBlog,
};