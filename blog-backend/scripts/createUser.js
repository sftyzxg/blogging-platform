const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config();

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  profilePicture: String,
  bio: String,
});

const User = mongoose.model('User', userSchema);

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

const createNewUser = async () => {
  try {
    const hashedPassword = await bcrypt.hash('zihuijin1123', 10);

    const user = new User({
      username: 'testUser',
      email: 'A123456!',
      password: hashedPassword,
      profilePicture: '',
      bio: 'test user',
    });

    await user.save();
    console.log('User created:', user);
    
    mongoose.connection.close();
  } catch (error) {
    console.error('Error creating user:', error);
    mongoose.connection.close();
  }
};

createNewUser();
