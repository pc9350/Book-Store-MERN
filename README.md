# 📚 Book Store Project

This project is a simple Book Store application built using the MERN stack (MongoDB, Express.js, React, and Node.js). The application allows users to perform CRUD operations on a collection of books.

## Features

- Create a new Book
- Retrieve all Books
- Retrieve a Book by ID
- Update a Book
- Delete a Book
- Show Books List as Cards
- Improve User Experience with modals and alerts

## Technologies Used

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
- **Frontend:**
  - React
  - Vite
  - Tailwind CSS
  - React Router DOM

## Installation and Setup

1. **Clone the repository:**
    ```sh
    git clone https://github.com/pc9350/Book-Store-MERN.git
    cd Book-Store-MERN
    ```

2. **Backend Setup:**
    - Navigate to the backend directory and install dependencies:
        ```sh
        cd backend
        npm install
        ```
    - Create a `config.js` file in the backend directory and add your configuration:
        ```js
        export const PORT = 5555;
        export const MongoDBURL= 'your-mongodb-url'
        ```
    - Start the backend server:
        ```sh
        npm run dev
        ```

3. **Frontend Setup:**
    - Navigate to the frontend directory and install dependencies:
        ```sh
        cd ../frontend
        npm install
        ```
    - Start the frontend development server:
        ```sh
        npm run dev
        ```

4. **Access the application:**
    - Open your browser and go to `http://localhost:5173`