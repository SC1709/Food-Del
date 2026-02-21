# 🍔 Food-Del — Food Delivery Website

## 📌 Project Overview

**Food-Del** is a full-stack food delivery web application designed to simulate a real-world online food ordering platform. The project is structured with three main modules: 
- 🖥️ **Frontend (User Interface)**
- 🛠️ **Backend (REST API Server)**
- 🧑‍💼 **Admin Panel (Management Dashboard)**

The platform allows users to browse available food items, explore categories, add items to their cart, and place orders seamlessly. It includes essential e-commerce functionalities such as dynamic cart updates, order total calculation, and user authentication.

The backend is responsible for managing product data, handling user accounts, processing orders, and interacting with the database using RESTful APIs. It ensures secure communication between the client and server while maintaining data consistency.

The admin panel enables administrators to efficiently manage the platform by:
- Adding new food items
- Updating existing products
- Deleting items
- Viewing and managing customer orders

This project helps users browse food items, place orders, and admins manage products & orders.
---

## 🌐 Live Demo

Frontend: [https://food-del-frontend-givz.onrender.com/](https://food-del-frontend-givz.onrender.com/)  
Backend: [https://food-del-backend-lc8g.onrender.com](https://food-del-backend-lc8g.onrender.com/)  
Admin: [https://food-del-admin-lzov.onrender.com](https://food-del-admin-lzov.onrender.com)

---

<!-- ## 📸 Screenshots

### 🏠 Home Page
![Home](./frontend/public/screenshots/home.png)

### 🔐 Login Page
![Login Page](./frontend/public/screenshots/login.png)

### 🛒 Cart Page
![Cart](./frontend/public/screenshots/cart.png)

### 🧾 My Orders Page
![My Orders Page](./frontend/public/screenshots/myorder.png)

### 🧑‍💼 Admin Dashboard
![Admin](./frontend/public/screenshots/admin.png)

--- -->

## 📸 Screenshots

<table>
<tr>
<td width="50%">
<h4 align="center">🏠 Home Page</h4>
<img src="./frontend/public/screenshots/home.png" width="100%" />
</td>
<td width="50%">
<h4 align="center">🔐 Login Page</h4>
<img src="./frontend/public/screenshots/login.png" width="100%" />
</td>
</tr>

<tr>
<td width="50%">
<h4 align="center">🛒 Cart Page</h4>
<img src="./frontend/public/screenshots/cart.png" width="100%" />
</td>
<td width="50%">
<h4 align="center">🧾 My Orders</h4>
<img src="./frontend/public/screenshots/myorder.png" width="100%" />
</td>
</tr>

<tr>
<td width="50%">
<h4 align="center">🧑‍💼 Admin Dashboard</h4>
<img src="./frontend/public/screenshots/admin.png" width="100%" />
</td>
<td width="50%">
</td>
</tr>
</table>

---

## 🛠️ Tech Stack

### 🖥️ Frontend (User)

- ⚛️ React (Vite)
- 🎨 Tailwind CSS
- 🔄 React Router DOM
- 🎯 React Icons
- 📦 Axios
- 🔔 React Toastify (toast notifications)

### 🛠️ Backend (Server)

- 🟢 Node.js
- 🚀 Express.js
- 🗃️ MongoDB (via Mongoose)
- 📤 Multer (file upload)
- 🔐 JWT Authentication 
- 🧂 bcrypt for password hashing 
- 📦 dotenv for environment configuration
- 🧪 CORS for cross-origin API requests

### 🧑‍💼 Admin Panel

- ⚛️ React (Vite)
- 🎨 Tailwind CSS
- 🔄 React Router DOM
- 🎯 React Icons
- 📦 Axios
- 🔔 React Toastify

---

## 📁 Folder Structure

```
Food-Del/
├── frontend/               # Frontend (React + Vite)
│   ├── public/
│   ├── src/
|   |   ├── assets/         # Images, icons, etc.
│   │   ├── components/     # Reusable components (Navbar, FoodItem, etc.)
│   │   ├── pages/          # Page-level components (Home, Cart, Order)
|   |   ├── context/        # Global state management
│   │   ├── App.jsx         # Main app structure
│   │   └── main.jsx        # App entry point
│   ├── vite.config.js
│   └── package.json
│
├── backend/                # Backend (Node + Express)
│   ├── config/             # DB connection, environment setup
│   ├── controllers/        # Business logic
│   ├── models/             # Mongoose schemas (Food, User, Order, etc.)
│   ├── routes/             # Express routes (cart, users, etc.)
│   ├── middleware/         # Error handling, auth
│   ├── server.js           # Entry point
│   └── package.json
│
├── admin/                  # Admin Dashboard (React + Vite)
│   ├── public/
│   ├── src/
|   |   ├── assets/         # Images, icons, etc.
│   │   ├── components/     # Reusable components (Navbar, Sidebar, etc.)
│   │   ├── pages/          # Page-level components (Add item, List item, Order)
│   │   ├── App.jsx         # Main app structure
│   │   └── main.jsx        # App entry point
│   ├── vite.config.js
│   └── package.json
│
└── README.md

````
---

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x
- MongoDB Atlas/local
- Git

---

## ⚙️ Installation & Setup

#### 1 Clone the repo

```bash
https://github.com/SC1709/Food-Del.git
cd Food-Del
````

### 🖥️ Frontend (Client)

```bash
cd frontend
npm install
npm run dev
````

### 🛠️ Backend (Server)

```bash
cd ../backend
npm install
# Create .env file (see below) and set the following:
npm start
```

### 🖥️ Admin Panel (Admin Access Only) 
⚠️ The Admin panel is accessible only to users with Admin user.
Users must be authenticated with a valid JWT token and authorized as admin to access protected routes.

```bash
cd ../admin
npm install
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file in `backend/` directory:

```
PORT=5000
MONGO_URL=your_mongodb_connection_url
JWT_SECRET=your_jwt_secret
ADMIN_USERNAME=your_admin_user_name
ADMIN_PASSWORD=your_admin_user_password
```

---

## 🚀 Features

* 🏪 Product Listing & Detail View
* 🛍️ Dynamic Product Browsing
* 🛒 Add to Cart Functionality
* 🎨 Fully Responsive UI
* 🔐 User Authentication (JWT + bcrypt)
* 🧭 Client-Side Routing with React Router
* 📦 MongoDB Schema Design (User, Food, Order, Cart, etc).
* 📦 Food Items Filters & Search
* 📡 REST API Integration with Express Backend   

---

## 🔮 Future Enhancements

* 📦 Advanced Product Management (categories, availability toggle)
* 💳 Payment Gateway Razorpay/Stripe
* 🛍️ Order Tracking System (track orders, cancel, reorder)
* 📊 Sales Analytics Dashboard (for Admins)
* 📧 Email Notifications (order confirmation, account updates)
* 🔔 Push Notifications (real-time order updates, discounts)

---

### 📦 API Endpoints

#### 👤 User Routes

| Method | Endpoint              | Description                  | Access     |
|--------|-----------------------|------------------------------|------------|
| POST   | `/api/user/register`  | Register new user            | Public     |
| POST   | `/api/user/login`     | Login user & get JWT         | Public     |
| GET    | `/api/user`           | Get all users                | Admin Only |

#### 🛒 Cart Routes

| Method | Endpoint              | Description                | Access     |
|--------|-----------------------|----------------------------|------------|
| POST   | `/api/cart/add`       | Add item to cart           | Private    |
| POST   | `/api/cart/remove`    | Remove item from cart      | Private    |
| POST   | `/api/cart/get`       | Get logged-in user cart    | Private    |

#### 📦 Order Routes

| Method | Endpoint               | Description                | Access     |
|--------|------------------------|----------------------------|------------|
| POST   | `/api/order/place`     | Place a new order          | Private    |
| POST   | `/api/order/verify`    | Verify payment status      | Public     |
| POST   | `/api/order/userorders`| Get logged-in users orders | Private    |
| GET    | `/api/order/list`      | Get all orders (Admin)     | Admin Only |
| POST   | `/api/order/status`    | Update order status        | Admin Only |

---

### 🤝 Contributing

We welcome contributions from developers of all experience levels! Help us improve **Food-Del** by fixing bugs, adding features, or refining the UI/UX.

#### 🔧 How to Contribute

1. **Fork** the repository
2. **Clone** your fork:
   ```bash
   git clone https://github.com/your-username/Food-Del.git
   make specific changes 
3. **Create** a new branch:
    ```bash
    git checkout -b feature/your-feature-name
4. **Make** your changes (frontend, backend)
5. **Commit** and **push**:
    ```bash
    git add .
    git commit -m "Add: your feature"
    git push origin feature/your-feature-name
6.  Open a **Pull** Request (PR) with a clear description

🧰 Contribution Tips
1. Follow existing code styles
2. Test your changes before pushing
3. Link related issues if applicable
4. Keep PRs focused and small
---

## 📃 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Developed & Maintained by

**Sachin Choudhary**
• [🐙 GitHub](https://github.com/SC1709) • [🔗 LinkedIn](https://linkedin.com/in/sachin-choudhary)

> *"Food-Del – Your one-stop destination for effortless food ordering."*

