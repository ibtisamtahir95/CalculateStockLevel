const express = require('express')
const app = express()
const port = 3000
const {getStockLevel} = require('./controller/stockLevel.controller');

app.get('/getStockLevel', getStockLevel);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})