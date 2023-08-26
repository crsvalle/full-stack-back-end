const db = require("../db/dbConfig.js");
const { hash } = require('bcryptjs')
const { sign } = require('jsonwebtoken')
const { SECRET } = require('../constants/index1.js')


const protectedInfo = async (req, res) => {
  try {
    return res.status(200).json({
      info: 'protected',
    })
  } catch (error) {
    console.log(error.message)
  }
};


const registerUser = async (req, res) => {
  const {username, password} = req.body
  
  try{
    const hashedPassword = await hash(password, 10)
    await db.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, hashedPassword])
    
    return res.status(201).json({
      success: true,
      message: 'Registration Success!'
    })
    
  }catch(error){
    console.log(error.message)
    return res.status(500).json({
      error: error.message
    })
  }
}

const loginUser = async(req, res) =>{
  let user = req.user
  let payload = {
    id: user.user_id,
    username:user.username,
  }
  
  try{
    const token = await sign(payload, SECRET)
    return res.status(200).cookie('token', token, {httpOnly: true}).json({
      success: true,
      message: "Logged in successfully",
      id: user.user_id, 
      username: user.username, 
    })
  }catch(error){
    console.log(error)
    return res.status(500).json({
      error:error.message,
    })
  }
}

const logoutUser = async (req, res) => {
  try{
    return res.status(200).clearCookie('token', {httpOnly: true}).json({
      success:true,
      message:"Logged out!"
    })
  }catch(error){
    console.log(error.message)
    return res.status(500).json({
      error: error.message
    })
  }
}
/////
/////
const getAllUsers = async () => {
  try {
    const allUsers = await db.query("SELECT user_id, username FROM users");
    console.log(allUsers)
    return allUsers;
  } catch (error) {
    return error;
  }
};
const getUser = async (id) => {
  try {
    const oneUser = await db.any("SELECT * FROM users WHERE LOWER(username)=LOWER($1)", id);
    return oneUser;
  } catch (error) {
    return error;
  }
  };

const collectPost = async (id) =>{
  try{
    const blogs = await db.any(
      `SELECT * FROM users JOIN blogs ON blogs.author = users.username WHERE LOWER(users.username) = LOWER($1)`, id);
      return blogs;
    } catch (error){
        return error;
    }
};


module.exports = {
  getUser,
  collectPost,
  registerUser,
  loginUser,
  getAllUsers,
  protectedInfo,
  logoutUser
};