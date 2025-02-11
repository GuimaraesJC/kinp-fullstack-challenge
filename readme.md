# Family Photo Management Application

## Description

This project is a full-stack web application developed as part of a job interview coding assignment. The application enables users to manage family photos with authentication and a simple API. The frontend is built using React (TypeScript) and communicates with a backend developed in Node.js (TypeScript) using Express. The backend is designed to function without a database, storing data locally instead.

## Setup

### Prerequisites

Ensure you have the following installed:

- Node.js (Latest LTS version recommended)
- NPM

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

### protected Routes (Front-End)

A route that checks for a JWT token in `localStorage` to grant access to all functionalities. If no token is found, the user is redirected to the login page.

### Login, Signup & Logout (Front-End)

Enables user creation and login with required field validation on both forms and removes the token from localStorage upon logout.

### 404 Page (Front-End)

Handles navigation for non-existent pages in the router, displaying a user-friendly error message and offering clear options to navigate back to the homepage.

### Responsiviness (Front-End)

Ensures that all pages are fully responsive, providing an optimal viewing experience across desktop, tablet, and smartphone devices.

