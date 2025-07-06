
# 🔗 URL Shortener Project

This project is a **URL Shortener** built using **Node.js**, **Express**, and **MongoDB**, with support for **Stateful** and **Stateless Authentication**.

## 🌐 Live GitHub Repository
[GitHub Repo – Shehryar-dev/url-shorter](https://github.com/Shehryar-dev/url-shorter.git)

---

## 📁 Project Structure & Branches

This project uses **2 branches** to demonstrate both authentication methods:

- `stateful`: Session & cookie-based auth
- `stateless`: Token-based (JWT) authentication

```
📦 url-shorter/
 ┣ 📂 controllers/
 ┣ 📂 middleware/
 ┣ 📂 models/
 ┣ 📂 routes/
 ┣ 📂 views/
 ┣ 📄 .env.example
 ┣ 📄 index.js
 ┣ 📄 package.json
 ┗ 📄 README.md
```

---

## 🔐 Authentication

### 1. ✅ Stateless Authentication
- JWT-based secure login
- Tokens are sent via headers
- Lightweight, scalable

### 2. ✅ Stateful Authentication
- Cookie-based login system
- Sessions stored in cookies
- Suitable for traditional web apps

---

## 🧩 Dependencies

```
"cookie-parser": "^1.4.7",
"ejs": "^3.1.10",
"express": "^5.1.0",
"jsonwebtoken": "^9.0.2",
"mongoose": "^8.16.1",
"nanoid": "^5.1.5",
"shortid": "^2.2.17",
"uuid": "^11.1.0"
```

---

## 🚀 How to Run

### 1. Clone the Repository
```bash
git clone https://github.com/Shehryar-dev/url-shorter.git
cd url-shorter
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Rename `.env.example` to `.env` and fill in the required values.

### 4. Start the Server
```bash
npm start
```

### 5. Choose Branch
```bash
git checkout stateful     # for main (cookie-based login)
git checkout stateless    # for JWT login
```

---

## ✨ Features

- URL shortening using `nanoid`, `uuid`, and `shortid`
- Custom URL codes
- JWT & cookie authentication
- EJS templating for UI
- MongoDB for persistent storage

---

## 📦 Author

**Shehryar Saleem** – [GitHub](https://github.com/Shehryar-dev)

---

> Built with ❤️ by a passionate learner and backend enthusiast!
