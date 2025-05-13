# Kanban Board

A full-stack Kanban board application for organizing tasks and projects. Built with a modern JavaScript stack, this app allows users to register, log in, and manage tasks across customizable columns.

---

## Features

- **User Authentication:** Register and log in securely with a username and password.
- **Task Management:** Create, update, move, and delete tasks across columns.
- **Responsive UI:** Clean, modern interface built with React and Vite.
- **RESTful API:** Robust backend using Node.js, Express, Sequelize, and PostgreSQL.
- **Persistent Storage:** All data is stored in a PostgreSQL database.
- **Developer Friendly:** Easy to run locally and deploy to cloud platforms like Render.

---

## Tech Stack

- **Frontend:** React, Vite, TypeScript
- **Backend:** Node.js, Express, Sequelize
- **Database:** PostgreSQL
- **Authentication:** JWT (JSON Web Tokens)
- **Other Tools:** bcrypt/bcryptjs, dotenv, concurrently, nodemon

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [PostgreSQL](https://www.postgresql.org/) (locally or cloud instance)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/kanban-board.git
   cd kanban-board
   ```

2. **Install dependencies:**

   ```sh
   npm run install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the `server` directory:

   ```
   DB_NAME=kanban_db
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   JWT_SECRET_KEY=your_jwt_secret
   ```

4. **Set up the database:**

   - Create the database in PostgreSQL:
     ```sh
     createdb -U your_db_user kanban_db
     ```
   - (Optional) Seed a test user:
     ```sh
     npm run seed
     ```

5. **Run the application:**

   - For development:
     ```sh
     npm run start:dev
     ```
   - For production build:
     ```sh
     npm run start
     ```

---

## Usage

- Open your browser and navigate to `http://localhost:3000`
- Register a new account or log in with an existing user.
- Create, move, and manage your tasks on the Kanban board.

---

## Deployment

This app is ready to deploy on platforms like [Render](https://render.com/), [Heroku](https://heroku.com/), or [Vercel](https://vercel.com/).

- Ensure your environment variables are set in your deployment dashboard.
- Let the platform install dependencies (`node_modules` should not be committed).

---

## License

[MIT](LICENSE)
