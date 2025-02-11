# Family Photo Management Application

## Description

This project is a Full-Stack web application developed as part of a job interview coding assignment. The application enables users to manage family photos with authentication and a simple API. The frontend is built using React (TypeScript) and communicates with a backend developed in Node.js (TypeScript) using Express. The backend is designed to function without a database, storing data locally instead.

## Setup

### Prerequisites

Ensure you have the following installed:

- Node.js (Latest LTS version recommended)
- NPM

---

### Backend Setup

Navigate to the backend directory:

```
cd backend
```

Install dependencies:

```
npm install
```

Start the backend server:

```
npm run dev
```

By default, the server runs on http://localhost:3001.

---

### Frontend Setup

Navigate to the frontend directory:

```
cd frontend
```

Install dependencies:

```
npm install
```

Start the frontend application:

```
npm run dev
```

The application will be available at http://localhost:5173.

---

When launching the application for the first time, no user account is available. Navigate to the **Create Account** page to register a new user. After account creation, you will be redirected to the login page, where you can sign in with your new credentials.

## Stack of Choice

### Back-End

- Node.js
- TypeScript
- axios (HTTP Requests)
- bcrypt (Password Hashing)
- jsonwebtoken (JTW Auth)
- dotenv (Env Variables)

### Front-End

- React
- TypeScript
- Tailwind (Styling)
- React Query (Data Fetching and Validations)
- Axios (HTTP Requests)

## Features

### Routes (Back-End)

- /signup -> POST
- /login -> POST
- /users -> GET
- /users/:userId/albums -> GET

On `/signup`, you can create a new account. It validates whether the email already exists and ensures that all fields are filled in correctly.

On `/login`, a JWT token is generated when the credentials are correct, and this token is later saved in the browser's `localStorage`. It also validates whether all fields are filled in correctly.

The last two routes are simple GET requests: one fetches all available users, and the other fetches all albums associated with a specific user ID.

### Middleware (Back-End)

Leveraging this concept and the simplicity of implementing it in Express, the `authMiddleware` validates whether the GET requests above receive a JWT token in the header to ensure that unauthenticated users do not access protected information.

### Refetching (Front-End)

Using React Query, a 10-minute refetch interval was implemented to keep the data up-to-date for the user.

### Protected Routes (Front-End)

A route that checks for a JWT token in `localStorage` to grant access to all functionalities. If no token is found, the user is redirected to the login page.

### Login, Signup & Logout (Front-End)

Enables user creation and login with required field validation on both forms and removes the token from localStorage upon logout.

### 404 Page (Front-End)

Handles navigation for non-existent pages in the router, displaying a user-friendly error message and offering clear options to navigate back to the homepage.

### Responsiviness (Front-End)

Ensures that all pages are fully responsive, providing an optimal viewing experience across desktop, tablet, and smartphone devices.

## Improvements for the Future

Since the project was developed within an 8-hour timeframe, certain aspects were intentionally simplified. In a real-world application, I would implement the following improvements:

**Use ESLint and Prettier:** Ensure code consistency and maintainability by enforcing coding standards and automatic formatting.

**Use environment variables instead of string constants:** Store sensitive and configurable values (e.g., API URLs, authentication keys) in environment variables to improve security.

**Create a hook for localStorage:** Encapsulate localStorage interactions in a custom React hook to improve code reusability and make state persistence more manageable.

**Validate security of password and ask to repeat the password:** Enhance user security by enforcing password strength rules and requiring confirmation to prevent typos.

**Messages on forms to handle empty fields on login and signup:** Improve user experience by displaying validation messages when required fields are left empty.

**Implement skeletons:** Enhance perceived performance by displaying loading skeletons while data is being fetched.

**Enhance navigation for small screens:** Implement a sliding menu for the top bar on smaller screens to enhance usability.

**Export paths using TypeScript:** Use the `paths` option in the `tsconfig.json` file to improve readability and simplify imports throughout the application.

**Minor visual issue on smaller screens when displaying albums:** The bottom of the card appears larger than the picture. Not fixed due to time constraints.

**Implement pagination:** Optimize performance and enhance user experience by loading data in chunks rather than displaying everything at once, especially for large responses.

**On back-end, a structure of MVC or similar to handle logic in a separate layer:** Improve code organization and maintainability by separating business logic from route handlers using an MVC or service-based architecture. However, since this position focuses on Front-End, I chose to keep the logic within the same file.

**On back-end, use a database:** Store and manage data persistently rather than relying on in-memory storage, improving scalability and reliability.

**Use Docker for Project Setup and Database Integration:** Containerize the application using Docker to streamline setup and ensure consistency across environments. This includes setting up a Docker Compose configuration to easily run the frontend, backend, and database services, simplifying local development and deployment.