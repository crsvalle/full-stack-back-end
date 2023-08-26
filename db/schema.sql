DROP DATABASE IF EXISTS blogs_dev;
CREATE DATABASE blogs_dev;

\c blogs_dev;

-- Create "users" table first
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username varchar(255) UNIQUE NOT NULL,
  fullName text,
  password varchar(255) NOT NULL,
  created_at date DEFAULT current_date
);

-- Create "blogs" table next
DROP TABLE IF EXISTS blogs;

CREATE TABLE blogs (
  id SERIAL PRIMARY KEY,
  author_id INTEGER REFERENCES users (user_id),
  author TEXT NOT NULL, 
  name TEXT NOT NULL,
  image TEXT DEFAULT '',
  body TEXT NOT NULL,
  type TEXT,
  date TEXT
);

-- Create "comments" table last
DROP TABLE IF EXISTS comments;

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  blog_id INTEGER REFERENCES blogs (id),
  name TEXT NOT NULL,
  content TEXT NOT NULL,
  date TEXT NOT NULL
);