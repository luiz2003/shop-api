import express from 'express';

import customerRouter = require('./routes/customer')

import stockRouter = require('./routes/stock');

import orderRouter = require('./routes/order');

const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hi');
});

app.use('/customer', customerRouter);

app.use('/stock', stockRouter);

app.use('/order', orderRouter);

app.listen(PORT, () => {
  console.log(`[server]: Server is running at https://localhost:${PORT}`);
});
