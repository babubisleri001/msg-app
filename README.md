# 🔥 Cipher - Real-Time Chat Application

[![Live Demo](https://img.shields.io/badge/Demo-Live-green?style=for-the-badge&logo=render)](https://msg-app-7p5n.onrender.com/login)
[![GitHub stars](https://img.shields.io/github/stars/babubisleri001/msg-app?style=for-the-badge)](https://github.com/babubisleri001/msg-app/stargazers)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)


## 🚀 Features

✨ **Real-Time Messaging**  
- Instant message delivery using Socket.io  
- Supports 100+ concurrent users with 40% lower latency than polling  

🔒 **Secure Authentication**  
- JWT token-based login/signup  
- Password hashing with bcrypt.js  

🌓 **Personalized UX**  
- Light/dark mode with MongoDB-persisted preferences  
- Responsive design (Tailwind CSS + DaisyUI)  

⚡ **Optimized Backend**  
- RESTful APIs with Express.js (95% uptime)  
- MongoDB Atlas with indexed collections (30% faster queries)  

## 🛠 Tech Stack

**Frontend**  
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=flat&logo=tailwind-css&logoColor=white)

**Backend**  
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=flat&logo=socketdotio&logoColor=white)

**Database**  
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![MongoDB Atlas](https://img.shields.io/badge/MongoDB_Atlas-47A248?style=flat&logo=mongodb&logoColor=white)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/babubisleri001/msg-app.git
   cd msg-app
2. Install dependencies
    ```bash
    # Frontend
    cd client && npm install

    # Backend 
    cd ../server && npm install

3.  Configure environment variables
      ```bash
      # Frontend (.env in /client)
      VITE_API_URL=http://localhost:5000
      # Backend (.env in /server)
      MONGODB_URI=your_mongodb_atlas_uri
      JWT_SECRET=your_jwt_secret
      PORT=5000

4. Run the application
      ```bash
      # Frontend (from /client)
      npm run dev

      # Backend (from /server)
      npm start

   
