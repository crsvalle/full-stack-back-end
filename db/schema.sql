DROP DATABASE IF EXISTS blogs_dev;
CREATE DATABASE blogs_dev;

\c blogs_dev;

CREATE TABLE blogs (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
author TEXT NOT NULL,
image TEXT DEFAULT '',
body TEXT NOT NULL,
type TEXT,
date TEXT
);