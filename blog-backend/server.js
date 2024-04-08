require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});