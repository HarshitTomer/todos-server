const router = require('express').Router();
const User = require('../models/user');

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    console.log(user)
    if (!user) return res.status(401).json({ error: 'User not found' });
    if (password !== user.password) return res.status(401).json({ error: 'Incorrect password' });
   
    res.status(200).json({ id:user._id, name:username, message: 'Login successful' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Login failed' });
  }
});

router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).json({ error: 'Logout failed' });
    res.status(200).json({ message: 'Logout successful' });
  });
});

module.exports = router;
