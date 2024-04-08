const express = require('express');
const router = express.Router();
const Post = require('../models/post'); 
const Comment = require('../models/comment');


router.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'username')
      .sort({ publishedDate: -1 }); 
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts', error });
  }
});

router.post('/posts', async (req, res) => {
  try {
    const { title, content, tags, author } = req.body;
    const newPost = new Post({
      title,
      content,
      tags,
      author, 
    });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.error("Error creating post", error);
    res.status(500).json({ message: 'Error creating post', error: error.message });
  }
});


module.exports = router;
