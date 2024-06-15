const express = require('express');
const app = express();
const emailAuth = require('./routes/emailAuth');

app.use(express.json());
app.use('/api/email-auth', emailAuth);

module.exports = app;
