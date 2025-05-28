const express = require('express');
require('dotenv').config();
const app = express();

app.use(express.json());

app.use('/auth', require('./routes/auth.routes'));
app.use('/books', require('./routes/book.routes'));
app.use('/categories', require('./routes/category.routes'));
app.use('/users', require('./routes/user.routes'));
app.use('/borrow', require('./routes/borrow.routes'));

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
