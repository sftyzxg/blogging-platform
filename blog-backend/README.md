# Blog Backend

## Description

This is the backend service for the blog application, built with Express and MongoDB.

## Getting Started

### Prerequisites

- Node.js
- MongoDB database

### Setting Up Environment Variables

Create a `.env` file in the root directory with the following content:

- `JWT_SECRET` - A secret key for JWT token generation. Generate a random string for this.
- `MONGODB_URL` - Your MongoDB connection string. Ensure the database is accessible.

### Installation

Install dependencies by running:

### `npm install`

Start the server with:

### `npm start`

### Adding a New User

To add a new user to the database, use the createUser.js provided in the `scripts` directory. Ensure your MongoDB URL is correctly set in your `.env` file.
