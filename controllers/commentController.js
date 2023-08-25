const express = require("express");

const comments = express.Router({ mergeParams: true });
const {
  getAllComments,
  getComment,
  newComment,
  deleteComment,
  updateComment,
} = require("../queries/comments");

// INDEX
comments.get("/", async (req, res) => {
    const { blogId } = req.params;
  
    try {
      const allComments = await getAllComments(blogId);
      res.json(allComments);
    } catch (err) {
      res.json(err);
    }
  });

// SHOW
comments.get("/:id", async (req, res) => {
  const { id } = req.params;
  const comment = await getComment(id);
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// UPDATE
comments.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedComment = await updateComment(id, req.body);
  if (updatedComment.id) {
    res.status(200).json(updatedComment);
  } else {
    res.status(404).json("Comment not found");
  }
});


//NEW
comments.post("/", async (req, res) => {
  const comment = await newComment(req.body);
  res.status(200).json(comment);
});

// DELETE
comments.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const deletedComment = await deleteComment(id);
  if (deletedComment.id) {
    res.status(200).json(deletedComment);
  } else {
    res.status(404).json({ error: "Comment not found" });
  }
});

module.exports = comments;