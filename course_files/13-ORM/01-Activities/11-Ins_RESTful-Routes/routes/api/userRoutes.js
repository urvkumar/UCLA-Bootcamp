const router = require('express').Router();
const User = require('../../models/User');

// Model is e.g.: User, Order, Delivery, Todo
 // For every model, we typically have CRUD routes
 // C -> Create (POST)
 // R -> Read (GET)
 // U -> Update (PUT/PATCH/POST)
 // D -> Delete (DELETE)



// This route uses async/await with '.catch()' for errors
// and no HTTP status codes
router.get('/', async (req, res) => {
  const userData = await User.findAll().catch((err) => {
    res.json(err);
  });
  res.json(userData);
});

// This route uses async/await with try/catch for errors
// along with HTTP status codes
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(null);
    // 200 status code means the request is successful
    res.status(200).json(userData);
  } catch (err) {
    // 400 status code means the server could not understand the request
    res.status(400).json(err);
  }
});

module.exports = router;
