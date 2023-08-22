const db = require("../db/dbConfig.js");

const getAllUsers = async () => {
  try {
    const allUsers = await db.any("SELECT * FROM users");
    return allUsers;
  } catch (error) {
    return error;
  }
};

const getUser = async (id) => {
  try {
    const oneUser = await db.any("SELECT * FROM users WHERE LOWER(name)=LOWER($1)", id);
    return oneUser;
  } catch (error) {
    return error;
  }
  };

const collectPost = async (id) =>{
  try{
    const blogs = await db.any(
      `SELECT * FROM users JOIN blogs ON blogs.author = users.name WHERE LOWER(users.name) = LOWER($1)`, id);
      return blogs;
    } catch (error){
        return error;
    }
};


module.exports = {
  getUser,
  collectPost,
  getAllUsers,
};