
# Airbnb Clone  

A full-stack Airbnb Clone built with **Node.js, Express, and MongoDB**. This project replicates the core functionalities of Airbnb, enabling users to list properties, browse listings, authenticate users, and manage bookings.

## 🚀 Project Overview  

The purpose of this project is to simulate the essential features of Airbnb's platform, focusing on **user authentication, property listing management, and booking functionality**. It provides a backend API that allows users to perform CRUD operations for listings and bookings, with JWT-based authentication for secure access.

---

## 🛠️ Installation Instructions  

Follow these steps to set up the project locally:

1. **Clone the Repository:**  
   ```bash
   git clone https://github.com/MaulikPatel63/Airbnb-Clone.git
   cd airbnb-clone
   ```

2. **Install Dependencies:**  
   Make sure you have **Node.js** and **MongoDB** installed. Then run:  
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**  
   Create a `.env` file in the project root and add the following environment variables:  
   ```plaintext
   PORT=5000  
   MONGODB_URI=<your_mongo_database_uri>  
   JWT_SECRET=<your_jwt_secret_key>  
   ```

4. **Run the Server:**  
   Start the backend server with Nodemon for live reloading:  
   ```bash
   npm start
   ```
   Your server should now be running at: [http://localhost:5000](http://localhost:5000).

---

## 🌟 Key Features  

- **User Authentication**  
  - Secure registration and login using **bcrypt** for password hashing and **JWT** for token-based authentication.

- **Property Listings Management**  
  - Users can create, edit, view, and delete their property listings.

- **Bookings Functionality**  
  - Users can book properties and view their reservations.

- **Cookies Management**  
  - **Cookie-Parser** is used for handling cookies to store session details securely.

---

<!-- ## 🌐 Live Demo  

Check out the live version here: [Airbnb Clone Demo](#) 

--- -->

## 🛠️ Technologies Used  

- **Backend:** Node.js, Express  
- **Database:** MongoDB, Mongoose  
- **Authentication:** JWT, Bcrypt.js  
- **Environment Management:** Dotenv  
- **Utilities:** Cookie-Parser  
- **Development Tools:** Nodemon  

### Dependencies  

```json
{
  "bcryptjs": "^2.4.3",
  "cookie-parser": "^1.4.7",
  "dotenv": "^16.4.5",
  "express": "^4.21.1",
  "jsonwebtoken": "^9.0.2",
  "mongoose": "^8.7.1",
  "nodemon": "^3.1.7"
}
```
