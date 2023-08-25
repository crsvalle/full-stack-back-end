const db = require("../db/dbConfig.js");

const getAllComments = async (bookmark_id) => {
    try {
    const allComments = await db.any(
    "SELECT * FROM comments WHERE blog_id=$1",
    bookmark_id
    );
    return allComments;
    } catch (err) {
    return err;
    }
};

const getComment = async (id) => {
  try {
    const oneComment = await db.one("SELECT * FROM reviews WHERE id=$1", id);
    return oneComment;
  } catch (error) {
    return error;
  }
};

const newComment = async (comment) => {
  try {
    const newComment = await db.one(
      "INSERT INTO comments (blog_id, name, content, date) VALUES($1, $2, $3, $4) RETURNING *",
      [
        comment.blog_id,
        comment.name,
        comment.content,
        comment.date
      ]
    );
    return newComment;
  } catch (error) {
    return error;
  }
};

const deleteComment = async (id) => {
  try {
    const deletedComment = await db.one(
      "DELETE FROM comments WHERE id = $1 RETURNING *",
      id
    );
    return deletedComment;
  } catch (error) {
    return error;
  }
};

const updateComment = async (id, comment) => {
  try {
    const updatedComment = await db.one(
      "UPDATE comments SET name=$1, blog_id=$2, content=$3, date=$4 where id=$5 RETURNING *",
      [
        comment.name,
        comment.blog_id,
        comment.content,
        comment.date,
        id,
      ]
    );
    return updatedComment;
  } catch (error) {
    return error;
  }
};
module.exports = {
  getAllComments,
  getComment,
  newComment,
  deleteComment,
  updateComment,
};