const router = require('express').Router();
const {
  getUsers,
  createUser,
  getSingleUser,
  deleteSingleUser
} = require('../../controllers/userController');

// /api/users
router
  .route('/')
  // GET all users
  .get(getUsers)
  // POST a new user
  .post(createUser);

// /api/users/:userId
router
  .route('/:userId')
  // GET a single user by its _id 
  .get(getSingleUser)  
  // DELETE to remove user by its _id
  .delete(deleteSingleUser);


module.exports = router;
