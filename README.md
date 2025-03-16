# **JSON Server API**

![Node.js CI](https://img.shields.io/github/actions/workflow/status/saqibroy/todo-app-api/node.js.yml?branch=master)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

Live API URL: [https://todo-app-api-production-2b49.up.railway.app/todos](https://todo-app-api-production-2b49.up.railway.app/todos)

A lightweight, fully functional REST API built with `json-server`. This API serves as the backend for your application, providing endpoints to manage and retrieve data.

---

## **Features**
- **RESTful Endpoints**: Full CRUD support for resources.
- **Custom Routes**: Tailored responses for specific use cases.
- **Zero Configuration**: Easy to set up and deploy.
- **Mock Data**: Uses a `db.json` file to simulate a real database.

---

## **Getting Started**

### **Prerequisites**
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

### **Installation**
1. Clone the repository:
    ```bash
    git clone https://github.com/saqibroy/todo-app-api.git
    ```

## Navigate to the Project Directory
```bash
cd todo-app-api
```

---

## Install Dependencies
```bash
npm install
```

---

## Running Locally

### Start the API Server
```bash
npm run api
```

The API will be available at:
```bash
http://localhost:3001
```

---

## API Endpoints

### Base URL
```bash
http://localhost:3001
```

### Endpoints
| Method | Endpoint       | Description                     |
|--------|----------------|---------------------------------|
| GET    | `/todos`       | Get all todos                   |
| GET    | `/todos/:id`   | Get a specific todo by ID       |
| POST   | `/todos`       | Create a new todo               |
| PUT    | `/todos/:id`   | Update a todo by ID             |
| PATCH  | `/todos/:id`   | Partially update a todo by ID   |
| DELETE | `/todos/:id`   | Delete a todo by ID             |

---

### Example Requests
#### Get All Todos
```bash
curl http://localhost:3001/todos
```

#### Create a New Todo
```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "title": "Buy groceries",
  "completed": false
}' http://localhost:3001/todos
```

#### Update a Todo
```bash
curl -X PUT -H "Content-Type: application/json" -d '{
  "title": "Buy groceries",
  "completed": true
}' http://localhost:3001/todos/1
```

---

## Deployment

### Deploying to Railway
1. Push your code to a GitHub repository.
2. Go to [Railway](https://railway.app/) and create a new **Web Service**.
3. Connect your GitHub repository and configure the settings:
    - **Build Command**: `npm install`
    - **Start Command**: `npm start`
4. Deploy the service.

Your API will be available at:
```bash
https://todo-app-api-production-2b49.up.railway.app/todos
```

---

## Environment Variables
No environment variables are required for this API.

---

## Contributing
Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add your feature"
    ```
4. Push to the branch:
    ```bash
    git push origin feature/your-feature-name
    ```
5. Open a pull request.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Developed by
Saqib Sohail

![LinkedIn](https://img.shields.io/badge/LinkedIn-saqibroy-blue)
