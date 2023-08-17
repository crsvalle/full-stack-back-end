const db = require("../db/dbConfig.js");

const getAllBlogs = async () => {
    try {
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
      "INSERT INTO blogs () VALUES($1,) RETURNING *",
      []
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
      "UPDATE blogs SET name=$1,  where id=$2 RETURNING *",
      [, id]
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