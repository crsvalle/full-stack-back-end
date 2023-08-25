const express = require("express");
const search = express.Router();
const db = require("../db/dbConfig");

search.get('/', async(req,res) =>{
    const searchQuery = req.query.query;


    try {
        const searchResults = await db.query('SELECT * FROM blogs WHERE name ILIKE $1', [`${searchQuery}%`]);

        res.json(searchResults);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Something isn't right" });
    }
})

module.exports = search