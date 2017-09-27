var express = require('express');
var app = express();
var router = express.Router();

router.get('/',function(req,res) {
  throw new Error();
  res.send("Hello World!");
});

app.use('/',router);
//Error Handling middle 
app.use(function(err,req,res,next) {
  console.log(err.stack);
  res.status(500).send({"Error" : 'You got Error'});
});

app.listen(8080);