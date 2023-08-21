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
      "INSERT INTO blogs (name, author, image, body, type, date) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [blog.name, blog.author, blog.image, blog.body, blog.type, blog.date]
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

const updateBlog = async (id, blog) => {
  try {
    const updatedBlog = await db.one(
      "UPDATE blogs SET name=$1, author=$2, image=$3, body=$4, type=$5, date=$6  where id=$7 RETURNING *",
      [blog.name, blog.author, blog.image, blog.body, blog.type, blog.date, id]
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