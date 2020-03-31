const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

app.use(cookieParser());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/agentSkills', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to database, you fuck');
});

const userRouter = require('./routes/User');
app.use('/user', userRouter)

app.listen(3001, () => {
    console.log('server started');
});