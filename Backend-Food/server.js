const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

const connectDB = require('./config/connectionDB');
const PORT = process.env.PORT || 3000;

// Connect to Database
connectDB();

// Middleware
app.use(express.json());

const cors = require('cors');
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/recipe', require('./routes/recipe'));
app.use('/user', require('./routes/user'));
app.use('/public', express.static('public'));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});