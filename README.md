# BloomNest - Homemade Flower Pot Selling Website

"Handmade pots. Made with love."

BloomNest is a full-stack e-commerce store for handcrafted artisan flower pots, built with React, Vite, Tailwind CSS, Node.js, Express, MongoDB, Mongoose, and JWT authentication.

---

## 📁 Project Structure

```
DemoWeb/
├── Backend/
│   ├── controllers/
│   │   └── authController.js    # Register, Login, GetMe controllers
│   ├── middleware/
│   │   └── authMiddleware.js    # JWT authorization middleware
│   ├── models/
│   │   └── User.js              # User schema (name, email, phone, password, createdAt)
│   ├── routes/
│   │   └── authRoutes.js        # Auth API endpoints
│   ├── server.js                # Express app entry & MongoDB connection
│   ├── package.json
│   ├── .env                     # Local environment variables
│   └── .env.example
│
└── Frontend/
    ├── src/
    │   ├── components/          # Reusable components (Navbar, Footer, Hero, ProductCard, etc.)
    │   ├── pages/               # Pages (Home, Shop, ProductDetail, Login, Signup, CartPage, About, Contact)
    │   ├── context/             # React Contexts (AuthContext, CartContext)
    │   ├── data/                # Sample demo products dataset (products.js)
    │   ├── services/            # Axios API service (api.js using import.meta.env.VITE_API_URL)
    │   ├── App.jsx              # Main App & Router setup
    │   ├── main.jsx             # React entry point
    │   └── index.css            # Tailwind CSS & custom styles
    ├── index.html
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── vite.config.js
    ├── package.json
    ├── .env                     # VITE_API_URL
    └── .env.example
```

---

## 🛠️ Tech Stack

### Frontend
- **React (Vite)**
- **JavaScript (ES6+)**
- **Tailwind CSS** (Natural terracotta & clay color palette)
- **React Router DOM v6**
- **Axios** (Centralized API service)
- **React Hot Toast** (Toast notifications)
- **Lucide React** (Artisan icons)

### Backend
- **Node.js**
- **Express.js**
- **MongoDB & Mongoose**
- **JWT (JsonWebToken)**
- **bcryptjs** (Password hashing)
- **CORS**

---

## 🔑 Environment Variables Setup

### Backend Environment Variables (`Backend/.env`)
Create a `.env` file in the `Backend/` directory:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/bloomnest
JWT_SECRET=bloomnest_super_secret_jwt_key_2026
FRONTEND_URL=http://localhost:5173
```

*(See `Backend/.env.example` for reference)*

### Frontend Environment Variables (`Frontend/.env`)
Create a `.env` file in the `Frontend/` directory:

```env
VITE_API_URL=http://localhost:5000/api
```

*(See `Frontend/.env.example` for reference)*

---

## 🚀 How to Run the Application

### 1. Backend Setup & Run

Open terminal in the `Backend` directory:

```bash
cd Backend
npm install
npm run dev
```

The Express server will start at `http://localhost:5000`.

### 2. Frontend Setup & Run

Open a new terminal in the `Frontend` directory:

```bash
cd Frontend
npm install
npm run dev
```

The Vite dev server will start at `http://localhost:5173`.

---

## 🍃 MongoDB Setup Instructions

1. Make sure MongoDB Community Server is installed locally and running on port `27017` OR obtain a MongoDB Atlas connection string.
2. Update `MONGO_URI` in `Backend/.env`:
   - Local: `mongodb://127.0.0.1:27017/bloomnest`
   - Atlas: `mongodb+sandbox://user:password@cluster0.mongodb.net/bloomnest?retryWrites=true&w=majority`

---

## 🔐 Authentication Flow

1. **Registration (`POST /api/auth/register`)**:
   - Accepts `name`, `email`, `phone`, and `password` (min 6 chars).
   - Validates required fields and checks duplicate email.
   - Hashes password with `bcryptjs`.
   - Returns JWT token and user info.

2. **Login (`POST /api/auth/login`)**:
   - Accepts `email` and `password`.
   - Compares password with `bcrypt.compare`.
   - Returns JWT token and user info.

3. **Get Current User (`GET /api/auth/me`)**:
   - Protected route requiring `Authorization: Bearer <token>`.
   - Restores logged-in user profile on application refresh.

4. **Frontend Integration**:
   - Token stored in `localStorage` under `bloomnest_token`.
   - `AuthContext.jsx` manages user state, automatic login persistence, and logout.
   - All API requests use `src/services/api.js` with `import.meta.env.VITE_API_URL`.

---

## 🛒 Features Implemented

- **Home Page**: Hero section with CTAs, Category grid, Bestsellers product grid, About section, Why BloomNest feature cards, Call to action banner, and Footer.
- **Shop Page**: Full product catalog with real-time search, category filters, price range filters, and sort options (Featured, Price Low to High, Price High to Low, Rating).
- **Product Details Page (`/product/:id`)**: High-res image display, material & dimensions, ratings, quantity selector, Add to Cart & Buy Now actions.
- **Login & Signup Pages**: Full client-side validation, error banners, loading states, and backend JWT auth integration.
- **Cart**: LocalStorage-persisted cart state with item quantity adjustments, subtotal, shipping calculations, and order summary checkout demo.
- **About Page**: Artisan story, 3-step handmade pottery process, materials, and ethical values.
- **Contact Page**: Contact form with toast feedback, studio hours, and location info.
