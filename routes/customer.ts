const express = require('express');

const customerRouter = express.Router();

customerRouter.get('/', (req : any, res:any) => {
  res.send('costumer route');
});

export = customerRouter ;
