const express = require('express')
var fs = require("fs")
const app = express()
const port = 80

app.get('/profile', (req, res) => {
  res.send("This is my Twi-Like page <a href='/1'> Main </a>")
  
})

app.get('/1', (req, res) => {
  fs .appendFileSync("test.txt", req.query.message + "\n" + "<br>")
  var wall = fs.readFileSync("test.txt") 
  res.send(wall.toString() + "<br>" + "Author: " + req.query.author)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




