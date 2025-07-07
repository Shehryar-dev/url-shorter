# 🔗 URL Shortener - Stateful Auth (Node.js + Express + MongoDB)

A powerful and clean URL Shortener backend built with Express, Mongoose, and EJS. Supports **stateful authentication using JWT + cookies**, **role-based access control**, and a neat URL dashboard for users.

---

## 🚀 Features

- Shorten long URLs instantly
- User Authentication (Login/Register)
- 🛡️ **Stateful JWT Authentication using cookies**
- 🧑‍💻 Role-based Access Control (Admin / Normal User)
- Admin: Can view **all URLs** from every user
- Normal User: Can view **only their own generated URLs**
- EJS templating for UI
- MongoDB + Mongoose
- Cookie-based session storage

---

## 🔐 Authentication Flow (Stateful)

- JWT token is created on login and stored in **HTTP-only cookies**
- Protected routes verify token using middleware
- User info is decoded from token for role and ID checking
- Role field is used to apply access control

---

## 🧑‍🏫 Roles & Access

| Role   | Permissions                             |
|--------|------------------------------------------|
| `ADMIN`  | View ALL URLs, Users, and Stats          |
| `NORMAL` | View and manage ONLY their own URLs     |

---

## 🗃️ User Model (Mongoose)

```js
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['NORMAL', 'ADMIN'],
    default: 'NORMAL'
  }
});
```

---

## 🔐 Middleware: Auth + Role

- **verifyUser**: Checks token from cookie and sets `req.user`
- **checkRole('ADMIN')**: Protects admin routes

---

## 🛠 Tech Stack

- **Express.js** – Web framework
- **MongoDB + Mongoose** – Database
- **EJS** – Template engine
- **JWT** – Token auth
- **cookie-parser** – Cookie middleware
- **dotenv** – Env config
- **nanoid / shortid / uuid** – URL ID generation

---

## 📂 Branches

| Branch        | Description                       |
|---------------|-----------------------------------|
| `main`        | Stateless Auth Version            |
| `stateful`    | ✅ Stateful Auth with Roles        |

---

## 🧪 Run Locally

```bash
git clone https://github.com/Shehryar-dev/url-shorter.git
cd url-shorter
git checkout stateful
npm install
npm run dev
```

Create a `.env` file:
```env
MONGODB_URI=your_mongo_connection
JWT_SECRET=your_jwt_secret_key
PORT=3000
```

---

## ✅ API Endpoints (Secure)

- `POST /signup` – Register user
- `POST /login` – Login & get token (in cookie)
- `GET /` – Protected, based on user role
- `POST /shorten` – Auth required, URL creation
- `GET /` – Normal user’s URLs only
- `GET /admin/urls` – Admin only

---

## ✍️ Author

Shehryar Saleem – [@Shehryar-dev](https://github.com/Shehryar-dev)

---

## 📜 License

MIT