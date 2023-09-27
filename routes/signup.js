const router = require('express').Router();
const User = require('../models/user');

router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    
    try {
      // Check if the username already exists
      const existingUser = await User.findOne({ username });
  
      if (existingUser) {
        return res.status(400).json({ error: 'Username already exists' });
      }
  
      const newUser = new User({
        username,
        password, // Store the password as plain text
      });
  
      await newUser.save();
      res.status(201).json({ message: 'Signup successful' });
    } catch (error) {
      res.status(500).json({ error: 'Signup failed'});
      console.log(error)
    }
  });
  
module.exports = router;
  