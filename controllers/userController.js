const express = require("express");
const { protectedInfo, getAllUsers, getUser, collectPost, registerUser, loginUser, logoutUser } = require("../queries/user");
const { registerValidation, loginValidation } = require("../validation/checkAuth");
const { validationMiddleware } = require("../middlewares/validations-middleware");
const users = express.Router();
const { userAuth } = require("../middlewares/passport-middleware");

users.get('/protected', userAuth, protectedInfo);

users.post("/register", registerValidation, validationMiddleware, registerUser )

users.post('/login', loginValidation, validationMiddleware, loginUser)

users.get('/logout', userAuth, logoutUser)


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