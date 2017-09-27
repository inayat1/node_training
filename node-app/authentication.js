const express = require('express');
const basicAuth = require('basic-auth-connect');
const app = express();

app.use(basicAuth(function(user, pass) {
  return (user === 'testuser' && pass === 'test');
}));
app.get('/', function(req, res) {
  res.send('Successful Authentication!');
});

app.listen(8080,()=>console.log('Server is listening!'));
