<h2 align="center">✨ Features</h2>

<p align="center">
  <img src="https://img.shields.io/badge/JWT-Authentication-blue?style=for-the-badge">
  <img src="https://img.shields.io/badge/User-Login%20%26%20Register-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Crypto-Password%20Encryption-orange?style=for-the-badge">
  <img src="https://img.shields.io/badge/Socket.IO-Real--Time%20Chat-black?style=for-the-badge">
</p>


HTML + NODE.JS + POSTGRESQL + CORS — QUICK OVERVIEW

1. HTML
   HTML is used to create the frontend/user interface.

Example:

<form>
    <input type="text">
    <input type="password">
    <button>Login</button>
</form>

HTML collects data from the user.

---

2. Node.js

Node.js runs JavaScript on the backend/server.

It receives requests from the frontend and processes them.

Example:

Frontend
↓
Node.js Backend
↓
Process request
↓
Send response

---

3. PostgreSQL

PostgreSQL is the database.

It stores application data such as:

users
passwords
messages
products
etc.

Example:

users table

id | username | password

---

4. pg

`pg` is the Node.js package used to connect Node.js with PostgreSQL.

Install:

npm install pg

Example:

import pg from "pg";

const { Pool } = pg;

---

5. Pool

Pool manages reusable PostgreSQL connections.

Node.js
↓
Pool
↓
PostgreSQL

Instead of creating a new database connection for every query,
the Pool manages and reuses connections.

Example:

const pool = new Pool({
user: "postgres",
host: "localhost",
database: "login",
password: "password",
port: 5432
});

---

6. pool.query()

Used to execute SQL queries from Node.js.

Example:

const result = await pool.query(
"SELECT * FROM users"
);

The result is available in:

result.rows

---

7. CORS

CORS = Cross-Origin Resource Sharing.

It allows the frontend and backend running on different origins
to communicate.

Example:

React:
http://localhost:5173

Node.js:
http://localhost:4000

Install:

npm install cors

Use:

import cors from "cors";

app.use(cors());

---

8. express.json()

Used to read JSON data sent from the frontend.

Example frontend data:

{
"username": "dhruv",
"password": "1234"
}

Backend:

app.use(express.json());

Then:

req.body.username
req.body.password

---

9. Overall Flow

HTML / React
↓
Request
↓
Node.js + Express
↓
CORS
↓
Route
↓
pool.query()
↓
PostgreSQL
↓
Response
↓
Frontend

---

QUICK DEFINITIONS

HTML     → Frontend structure
Node.js  → Backend JavaScript runtime
Express  → Backend web framework
PostgreSQL → Database
pg       → Node.js PostgreSQL package
Pool     → Manages database connections
CORS     → Allows cross-origin frontend/backend requests
Query    → SQL command executed on the database

