require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.URI, 
    { useNewUrlParser: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

const listingRouter = require('./routes/listings');
app.use('/listings', listingRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});