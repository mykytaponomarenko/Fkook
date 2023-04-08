const express = require('express')
var fs = require("fs")
const app = express()
const port = 80

app.get('/', (req, res) => {
  fs .appendFileSync("test.txt", req.query.message + "\n" + "<br>")
  var wall = fs.readFileSync("test.txt") 
  res.send(wall.toString() + "<br>" + "Author: " + req.query.author)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


