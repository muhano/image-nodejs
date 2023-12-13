const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('This a simple Nodejs image')
})

app.listen(port, () => {
  console.log(`Nodejss app listening on port ${port}`)
})