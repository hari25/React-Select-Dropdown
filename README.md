# Select Dropdown Component with Number Visualization and Form

creating a select dropdown component using React that fetches data from an API and displays the list of CPT codes in a dropdown menu.

## API endpoints

```
GET    /api/cptCodes
GET    /api/cptCodes/:id
GET    /api/costs
GET    /api/costs/:id
GET    /api/cptCodes?_embed=costs
GET    /api/cptCodes/:id?_embed=costs
GET    /api/cptCodes/:id/costs
POST   /api/costs
POST   /api/cptCodes/:id/costs
```

# Vite.js Project with JSON Server

This is a simple project that uses Vite.js and fetches data from a mock JSON server.

## Prerequisites

Make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/)

## Getting Started

1. Clone this repository to your local machine:

   ```
   git clone https://github.com/umb/umb-react-project.git
   ```

2. Navigate to the project directory:

   ```
   cd umb-react-project
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Start the JSON server:

   ```
   npm run server
   ```

5. In a separate terminal window, start the Vite.js development server:

   ```
   npm run dev
   ```

6. Open your browser and go to `http://localhost:3000` to confirm the application running.
