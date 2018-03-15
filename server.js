var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');
var path = require('path');


// Set up the server PORT to use environment variables (Heroku) or default to 3,000 //
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// Route the Home view to the Public directory //
app.use('/', express.static(path.join(__dirname, 'public')));

// GET Route for Favorites - Pulls from data.json //
app.get('/favorites', function(req, res){
  var data = fs.readFileSync('./data.json');
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
});

// POST Route for Favorites - Writes to data.json //
app.post('/favorites', function(req, res){
  console.log("Trying to post to favorites")
  console.log(req.body);
  if(!req.body.name || !req.body.oid){
    res.send("Error");
    return
  }
  else {
  var data = JSON.parse(fs.readFileSync('./data.json'));
  data.push(req.body);
  fs.writeFile('./data.json', JSON.stringify(data));
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
}});

app.listen(port, function(){
  console.log("Listening on port " + port);
});
