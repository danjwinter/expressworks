var express = require('express')
var app = express()
var fs = require('fs')

app.get('/books', function(req, res) {
  var filename = process.argv[3]
  fs.readFile(filename, function(e, data){
    var book = JSON.parse(data)
    res.json(book)

  })
})
app.listen(process.argv[2])
