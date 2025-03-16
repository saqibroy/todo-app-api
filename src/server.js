const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();

// Set the path for db.json
const dbPath = process.env.DB_PATH || path.join(__dirname, 'db.json');
const router = jsonServer.router(dbPath);

const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
  console.log(`Using database file: ${dbPath}`);
});