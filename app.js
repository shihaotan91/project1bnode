var express = require('express')

var app = express()
var port = 4000

app.set('view engine', 'ejs')

app.get('/', function (req,res){
  res.render('index')
})

app.use(express.static(__dirname + '/public'))

app.listen(port)
