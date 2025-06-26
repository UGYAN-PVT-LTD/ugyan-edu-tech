const express = require('express');
const router = express.Router();
const { editProfile, deleteAccount } = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');
const User = require('../models/User'); // ✅ Import User model

// PATCH /api/users/edit
router.patch('/edit', auth, editProfile);

// DELETE /api/users/delete
router.delete('/delete', auth, deleteAccount);

// ✅ GET /api/users/me - Get current logged-in user info
router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch user info' });
  }
});

module.exports = router;
