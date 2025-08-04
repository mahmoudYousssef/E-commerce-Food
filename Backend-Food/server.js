const express = require ('express')
const app = express();
const dotenv = require('dotenv').config();

const connectDB = require('./config/connectionDB');
const PORT = process.env.PORT || 3000;

connectDB();
app.use(express.json());
const cors = require('cors');
app.use(cors());
 
app.get('/', (req, res) => {
  res.send('Hello World!');
});
 
app.use('/recipe', require('./routes/recipe'))


app.listen(PORT , ()=>{
  console.log(`server is running on port ${PORT}`);
  
}) 