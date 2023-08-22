const express = require("express");
const { getAllUsers, getUser, collectPost } = require("../queries/user");
const users = express.Router();

users.get("/", async (req, res) => {
    const allUsers = await getAllUsers();
    if (allUsers[0]) {
      res.status(200).json(allUsers);
    } else {
      res.status(500).json({ error: "server error" });
    }
  });


users.get("/:id", async (req, res) => {
    const { id } = req.params;
    const users = await getUser(id);
    if (users) {
      res.json(users);
    } else {
      res.status(404).json({ error: "not found" });
    }
  });

  //COLLECT
users.get('/:id/posts', async (req, res) =>{
    const {id} = req.params;
  
    const all = await collectPost(id);
    if(all){
      res.json(all)
    }else{
      res.status(404).json({error:"not found"})
    }
  })
  
  

  module.exports = users;