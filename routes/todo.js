const router = require('express').Router();
const Todo = require('../models/todo');
const User = require('../models/user');

router.post('/todos', async (req, res) => {
  try {
    const { userId, todo } = req.body;

   
    if (!userId || !todo) {
      return res.status(400).json({ error: 'User and todo are required' });
    }

    

    const newTodo = new Todo({
      user: userId, 
      todo,
    });

    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create a new todo' });
  }
});

router.get('/todos', async (req, res) => {
  try {
    const userId = req.query.userId; 
    console.log(userId)
    const todos = await Todo.find({ user: userId });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get todos' });
  }
});

router.put('/todos', async (req, res) => {
  try {
    const { userId, todoId, completed } = req.body;

    if (!userId || !todoId) {
      return res.status(400).json({ error: 'User, todo ID, and todo are required' });
    }

    const updatedTodo = await Todo.findByIdAndUpdate(
      todoId,
      {  completed:true },
      
    );

    if (!updatedTodo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    res.status(200).json(updatedTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update todo' });
  }
});
router.put('/edittodos', async (req, res) => {
  try {
    const { userId, todoId, updatedTodo } = req.body;

    if (!userId || !todoId || typeof updatedTodo !== 'string') {
      return res.status(400).json({ error: 'Invalid request data' });
    }

    // Assuming you have a Todo model defined
    const updatedTodoItem = await Todo.findOneAndUpdate(
      { _id: todoId }, // Filter condition with todoId
      { todo: updatedTodo },
      { new: true } // To return the updated document
    );

    if (!updatedTodoItem) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    res.status(200).json(updatedTodoItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update todo' });
  }
});



router.delete('/todos/:id', async (req, res) => {
  try {
    const { userId } = req.body;
    const todoId = req.params.id;

    if (!userId || !todoId) {
      return res.status(400).json({ error: 'User and todo ID are required' });
    }

    const deletedTodo = await Todo.findByIdAndRemove(todoId);

    if (!deletedTodo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete todo' });
  }
});
module.exports = router;
