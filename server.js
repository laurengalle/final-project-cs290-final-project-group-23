var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var twitNumber;

var app = express();
var port = process.env.PORT || 3000;



app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function(req, res, next){
    res.status(200).render('homepage');
});

app.get('/#homepage', function(req, res, next){
    res.status(200).render('homepage');
});

app.get('/#active', function(req, res, next){
    res.status(200).render('activePhotos');
});

app.get('*', function (req, res) {
  res.status(404).render('404Page');
});

app.listen(port, function (err) {
  if(err){
    throw err;
  }
  console.log("== Server is listening on port", port);
});
