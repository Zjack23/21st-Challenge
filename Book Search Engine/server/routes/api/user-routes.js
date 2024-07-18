// server/routes/api/userRoutes.js
const router = require('express').Router();
const {
  getSingleUser,
  createUser,
  loginUser,
  saveBook,
  deleteBook,
} = require('../../controllers/userController');

const { authMiddleware } = require('../../utils/auth');

router.route('/').post(createUser).put(authMiddleware, saveBook);
router.route('/login').post(loginUser);
router.route('/me').get(authMiddleware, getSingleUser);
router.route('/books/:bookId').delete(authMiddleware, deleteBook);

module.exports = router;
