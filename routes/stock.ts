const express = require('express');

const stockRouter = express.Router();

stockRouter.get('/', (req : any, res:any) => {
  res.send('stock route');
});

export = stockRouter;
