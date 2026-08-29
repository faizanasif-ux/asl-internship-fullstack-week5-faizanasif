# Project Walkthrough

## What It Does
This is a full stack task management app. Users register and log in with JWT-based authentication, then create, view, update, and delete tasks. Tasks support image/file attachments uploaded via Cloudinary, and the task list supports pagination, filtering, and search.

## Architecture
- **Frontend** (client/): Plain HTML/CSS/JS pages (login, register, dashboard) that call the backend API directly via fetch().
- **Backend** (server/): Node.js + Express REST API with routes for authentication (/api/auth) and tasks (/api/tasks).
- **Database**: MongoDB Atlas (cloud-hosted), accessed via Mongoose ODM.
- **File Storage**: Cloudinary handles image/file uploads for task attachments.
- **Deployment**: Backend deployed on Railway with a custom subdomain, auto-deploying on every push to the main GitHub branch via GitHub Actions CI.

## Request Flow Example (Login)
1. User submits email/password on login.html
2. Frontend sends POST request to /api/auth/login
3. Backend checks the rate limiter, looks up the user in MongoDB, compares the password hash with bcrypt
4. On success, backend issues a JWT access token and refresh token
5. Frontend stores the token and redirects to the dashboard

## Key Design Decisions
- Chose to await the MongoDB connection before starting the Express server (Week 6 fix) to avoid slow first-request latency.
- Kept the frontend as plain HTML/JS rather than a framework, to keep the project lightweight given the timeline.
- Used file-based error logging as a simple, dependency-free way to track server errors in production.

## What I Would Improve Next
Add a proper frontend framework (React) for better state management, add request caching, and integrate a real monitoring/alerting service instead of file-based logs.
