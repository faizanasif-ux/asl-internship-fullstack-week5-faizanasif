# ASL Internship - Week 5 Full Stack App

## Description
Full stack task management application with authentication, CRUD operations, automated testing, error handling, and cloud deployment.

## Live Links
- Frontend: https://melodious-flan-2cf0a5.netlify.app/login.html
- Backend/API: https://asl-internship-fullstack-week4-faizanasif-production-6c2f.up.railway.app
- Health Check: https://asl-internship-fullstack-week4-faizanasif-production-6c2f.up.railway.app/api/health

## How to Run Tests
1. Clone the repository
2. cd server
3. npm install
4. npm test

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
