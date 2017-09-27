/**
 * Middlewares:
 * 1.pre and post processing logic
 * 2.middleware is just a function .
 * 3.middleware can modifiy request and response objects
 * 4.middlwares must be registered.using app.use method
 * 5.middlware takes three parameter -req,res,next
 * 6.Types of Middlewares
 *
    A.Application-level middleware
    B.Router-level middleware
    C.Error-handling middleware
    D.Built-in middleware
    E.Third-party middleware

 */
/**
 * Application-level middleware
  Bind application-level middleware to an instance
  of the app object by using the app.use()
  and app.METHOD() functions, where METHOD is the
  HTTP method of the request that the middleware
  function handles (such as GET, PUT, or POST) in lowercase.

  app.get('route',(req,res,next)=>{})
  app.use((req,res,next)=>{}) -
 */

const express = require('express');
const app = express();

const myLogger = (req, res, next) => {
    console.log('LOGGED FROM', req.url);
    next();
}
//middleware registration
app.use(myLogger);
//Middleware
app.use((req, res, next) => {
    console.log(new Date());
    next();
})
//middleware stack
app.use((req, res, next) => {
    console.log('one');
    next();
}, (req, res, next) => {
    console.log('two');
    next();
}, (req, res, next) => {
    console.log('three');
    next();
}, (req, res, next) => {
    console.log('four');
    next();
})
app.get('/', (req, res) => {
    res.end('<h1>Welcome to Express App!</h1>')
});

app.get('/welcome', (req, res) => {
    res.end('<h1>Welcome to Express App!</h1>')
});

app.listen(8000, () => {
    console.log('Server is Ready!');
})