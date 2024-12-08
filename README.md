# Background Removal App

This project is a **Background Removal Application** built using the **MERN stack** (MongoDB, Express, React, Node.js). The app provides an intuitive and seamless way for users to upload images and remove their backgrounds. It's designed with modern features like authentication, real-time notifications, and a responsive interface for an enhanced user experience.

## Features

- **Frontend**:
  - Developed with **React** and styled using **TailwindCSS**.
  - Authentication via **Clerk**.
  - Toast notifications using **React Toastify**.
  - Router management with **React Router DOM**.
  - Interactive and user-friendly interface for uploading and managing images.
  
- **Backend**:
  - Built with **Node.js** and **Express**.
  - Database integration with **MongoDB** using **Mongoose**.
  - Secure API handling with **JSON Web Tokens (JWT)**.
  - File uploads managed via **Multer**.
  - Razorpay integration for handling payments (if required).
  - Notification management using **Svix**.
  
- **Utilities**:
  - Image processing for background removal.
  - Seamless communication between the frontend and backend using **Axios**.
  - Real-time data updates.
  - Environment variable management with **dotenv**.

## Installation

### Prerequisites
- Node.js and npm installed.
- MongoDB instance running locally or on a cloud provider.
- A Razorpay account for payment integration (optional).

### Clone the Repository
```bash
git clone https://github.com/ai-rupak/Bg-Removal-App.git
cd bg_removal
```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the backend directory with the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   ```
4. Start the server:
   ```bash
   npm run server
   ```

## Usage
1. Access the application at `http://localhost:3000` after starting the frontend server.
2. Use the interface to upload images and remove their backgrounds.
3. Backend API is available at `http://localhost:5000`.

## Scripts
### Frontend
- `npm run dev`: Start the development server.
- `npm run build`: Build the production version.
- `npm run lint`: Run linting.

### Backend
- `npm start`: Start the backend server.
- `npm run server`: Start the backend server with `nodemon` for hot reloading.

## Technologies Used

| Stack          | Libraries/Frameworks        |
|-----------------|-----------------------------|
| Frontend        | React, TailwindCSS, Axios, React Toastify |
| Backend         | Node.js, Express, Multer, JWT, Mongoose |
| Database        | MongoDB                     |
| Authentication  | Clerk                       |
| Payment Gateway | Razorpay                    |
| Notification    | Svix                        |

## Contributing
Contributions are welcome! Please fork this repository and submit a pull request.

## License
This project is licensed under the **ISC License**.

---

Feel free to customize the **.env**, adjust configurations, and integrate additional features to enhance the app's functionality.
