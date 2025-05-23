// const express = require('express');
// const app = express();
// const cors = require('cors');
// const dotenv = require('dotenv');
// const mongoose = require('mongoose');
// const moodRouter = require('./routes/moodRouter');
// const bodyParser = require('body-parser');
// dotenv.config();
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.json()); 
// //const geminiApi = require('./geminiApi');
// const userRoutes = require('./routes/users');
// app.use('/api/users', userRoutes);
// app.use( moodRouter);

// mongoose.connect(process.env.MONGO_URI)
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.log(err));

// app.listen(process.env.PORT, () => {
//     console.log(`Server running on port ${process.env.PORT}`);
// });

// //const run = require('./geminiApi');

// app.use("/", (req, res) => {
//     res.json("API IS WORKING")
// })




// new
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const moodRouter = require('./routes/moodRouter');
const bodyParser = require('body-parser');
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json()); 

const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);
app.use('/api/moods', moodRouter);  // Ensure /api/moods is correctly routed

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('MongoDB Connection Error:', err));

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

app.use("/", (req, res) => {
    res.json("API IS WORKING");
});
