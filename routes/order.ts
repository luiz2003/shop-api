const express = require('express');

const orderRouter = express.Router();

orderRouter.get('/', (req : any, res:any) => {
  res.send('order route');
});

export = orderRouter;
