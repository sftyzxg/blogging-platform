const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); 
const postRoutes = require('./routes/postRoutes'); 
const commentRoutes = require('./routes/commentsRoutes'); 

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', postRoutes);
app.use('/api', commentRoutes);


module.exports = app;
