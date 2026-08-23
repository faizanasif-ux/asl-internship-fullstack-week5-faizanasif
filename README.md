# ASL Internship - Week 5 Full Stack App

## Description
Full stack task management application with user authentication, CRUD operations, automated testing, centralized error handling, and cloud deployment. Built across Weeks 1-5 of the Advance Soft Logics Full Stack Web Development internship track.

## Live Links
- Frontend: https://melodious-flan-2cf0a5.netlify.app/login.html
- Backend/API: https://asl-internship-fullstack-week4-faizanasif-production-6c2f.up.railway.app
- Health Check: https://asl-internship-fullstack-week4-faizanasif-production-6c2f.up.railway.app/api/health

## Setup Instructions
1. Clone the repository
2. Navigate to server folder: cd server
3. Install dependencies: npm install
4. Create a .env file based on .env.example with your own MongoDB URI, JWT secret, and port
5. Run the backend: npm run dev
6. Open the client HTML files (login.html, register.html, dashboard.html) in a browser, or serve the client folder

## Folder Structure
- client/ - Frontend HTML, CSS, and JavaScript files (login, register, dashboard)
- server/ - Backend Express API
  - routes/ - Auth and task API routes
  - middleware/ - Auth middleware, upload middleware, error handler
  - models/ - Mongoose schemas
  - tests/ - Unit and integration tests
  - utils/ - Helper functions
  - config/ - Cloudinary configuration
- .github/workflows/ - GitHub Actions CI workflow

## How to Run Tests
1. cd server
2. npm install
3. npm test

## Features Implemented
- User authentication (register/login) with JWT
- Task CRUD operations with pagination, filtering, search
- File upload support
- 3+ Integration tests (Jest + Supertest)
- Unit tests for utility functions
- Centralized error-handling middleware
- Environment variable configuration (.env.example provided)
- Request logging (morgan)
- Rate limiting on login endpoint
- Health check endpoint
- GitHub Actions CI workflow
- Backend deployed on Railway
- Frontend deployed on Netlify
