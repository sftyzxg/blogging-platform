const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

router.post('/comments', async (req, res) => {
    try {
        const { postId, content } = req.body;
        const authorId = req.user._id; 

        console.log('Received comment data:', { postId, authorId, content });

        const newComment = new Comment({
            post: postId,
            author: authorId,
            content: content,
        });

        console.log('New comment object:', newComment);

        await newComment.save();
        console.log('Comment saved successfully:', newComment);

        res.status(201).json(newComment);
    } catch (error) {
        console.error('Error creating comment:', error);
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router;