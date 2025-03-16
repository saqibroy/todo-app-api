const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Custom route to return the desired structure
server.get('/todos', (req, res) => {
  const db = router.db.getState(); // Get the current database state
  res.jsonp({
    todos: db.todos,
    total: db.total,
    skip: db.skip,
    limit: db.limit
  });
});

server.use(router);

// Use the PORT environment variable or default to 3001 for local development
const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});