# P2 Web Lanjutan

A full-stack web application built with **React** frontend and **Express.js** backend. This project demonstrates a modern web development workflow with separate frontend and backend architectures.

## 📋 Project Structure

```
Per2_PengembanganWeb/
├── per2_frontend/          # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   │   ├── BeritaList.js
│   │   │   ├── ProductList.js
│   │   │   └── userList.js
│   │   ├── services/       # API service layer
│   │   │   ├── beritaService.js
│   │   │   ├── productService.js
│   │   │   └── userService.js
│   │   ├── App.js          # Main App component
│   │   └── index.js        # React entry point
│   └── package.json
│
├── src/                    # Express backend
│   ├── controllers/        # Route controllers
│   │   ├── beritaController.js
│   │   ├── productController.js
│   │   └── userController.js
│   ├── routes/             # API route definitions
│   │   ├── beritaRoutes.js
│   │   ├── productRoutes.js
│   │   └── userRoutes.js
│   ├── models/             # Database models (if applicable)
│   └── views/              # Server-side views (if applicable)
│
└── package.json            # Backend dependencies
```

## 🚀 Tech Stack

**Frontend:**

- React 19.2.4
- React DOM
- Axios (HTTP client)
- React Scripts (Create React App)

**Backend:**

- Node.js
- Express.js 5.2.1
- CORS enabled
- Body Parser
- Dotenv (environment variables)

## 📦 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the project root:

```bash
cd "Path\to\Per2_PengembanganWeb"
```

2. Install backend dependencies:

```bash
npm install
```

3. Create a `.env` file if needed for environment variables

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd per2_frontend
```

2. Install frontend dependencies:

```bash
npm install
```

## 🏃 Running the Application

### Start the Backend Server

From the project root:

```bash
npm start
# Backend will typically run on port 5000 or as configured
```

### Start the Frontend Application

From the `per2_frontend` directory:

```bash
npm start
# Frontend runs on port 3001
```

The frontend will automatically be available at `http://localhost:3001`

## 📚 API Endpoints

The backend provides REST API endpoints for:

- **Berita (News)**
  - Routes: `GET`, `POST`, `PUT`, `DELETE` operations
  - Controller: `beritaController.js`
  - Routes: `beritaRoutes.js`

- **Products**
  - Routes: `GET`, `POST`, `PUT`, `DELETE` operations
  - Controller: `productController.js`
  - Routes: `productRoutes.js`

- **Users**
  - Routes: `GET`, `POST`, `PUT`, `DELETE` operations
  - Controller: `userController.js`
  - Routes: `userRoutes.js`

All API calls from the frontend are handled through the service layer in `per2_frontend/src/services/`

## 🔧 Configuration

### CORS

The backend is configured with CORS enabled to allow requests from the frontend (port 3001).

### Environment Variables

Create a `.env` file in the root directory for backend configuration (if needed):

```
PORT=5000
# Add other environment variables as needed
```

## 📝 Available Scripts

### Backend

- `npm test` - Run tests (currently not configured)

### Frontend

- `npm start` - Run development server on port 3001
- `npm build` - Create production build
- `npm test` - Run test suite
- `npm eject` - Eject from Create React App (not reversible)

## 🎯 Features

- Full CRUD operations for multiple resources (Berita, Products, Users)
- RESTful API architecture
- React component-based UI
- Service layer for API abstraction
- CORS-enabled for cross-origin requests

## 👥 Author

RAaf28

## 📄 License

ISC

## 🤝 Contributing

Feel free to fork this repository and submit pull requests for any improvements.

## 📞 Support

If you encounter any issues, please create an issue in the GitHub repository.

---

**Repository:** [GitHub - P2_weblanjut](https://github.com/RAaf28/P2_weblanjut)
