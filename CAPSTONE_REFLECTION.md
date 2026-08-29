# Capstone Reflection

Over the course of this six-week Full Stack Web Development internship, I built a complete task management application from the ground up. Starting with a basic authenticated CRUD API in the early weeks, I progressively added file uploads via Cloudinary, pagination and search filtering, automated tests with Jest and Supertest, centralized error handling, and finally deployed the application live on Railway.

This final capstone week focused on hardening what I had already built rather than adding new features. I profiled the deployed application and discovered the login endpoint was taking nearly 4 seconds to respond. Investigating further, I traced this to the MongoDB connection being established asynchronously without the server waiting for it to complete before accepting requests. Fixing this by awaiting the database connection before starting the Express server reduced login response times to roughly 200-1200ms, a significant real-world improvement.

The hardest problem I solved this week was diagnosing that slow login issue. My first instinct was to suspect the bcrypt password comparison or an unindexed database query, since those are the most common culprits for slow authentication endpoints. Adding timing logs at each step of the login route helped me isolate the actual bottleneck to the database connection lifecycle rather than the query or hashing logic itself. This taught me the value of measuring before assuming, rather than guessing at a fix.

Beyond the core performance work, I also added several improvements: lazy loading for images on the frontend, file-based error logging, accessibility improvements including semantic form labels and descriptive alt text, and a custom Railway subdomain for a cleaner live URL.

If I were to do this differently, I would add performance profiling and logging much earlier in the project, rather than treating it as a final-week concern. Building in timing instrumentation from Week 1 would have made bottlenecks visible as the codebase grew, instead of surfacing them all at once during the capstone review. I would also set up monitoring and alerting from the start so that issues like slow endpoints could be caught automatically rather than discovered manually during a dedicated profiling pass.

Overall, this internship took me from writing a basic authenticated API to shipping and hardening a fully deployed, tested, and documented full stack application — a project I am confident presenting as a real portfolio piece.
