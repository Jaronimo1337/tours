const express = require('express');
const ticketRouter = require('./routes/ticketRoute');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));
app.use('/api/v1/register', ticketRouter);


module.exports = app;
