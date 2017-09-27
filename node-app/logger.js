const express = require('express');
const CustomerService = require('./CustomerService');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

//here express is variable which holds function.
const app = express();//function returns Object which conventially called Application

//Register Middleware.
// parse application/json
app.use(bodyParser.json());

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream
    (path.join(__dirname, 'access.log'), { flags: 'a' })
//Logger 
//app.use(morgan('combined'));
app.use(morgan('combined', { stream: accessLogStream }));

let custService = null;
const init = () => {
    custService = new CustomerService();
}
init();


app.get('/', (req, res) => {
    res.type('text/html');
    res.end('<h3>Welcome to Express !</h3>');
});
app.get('/api/customers', (req, res) => {
    res.json(custService.getCustomers());
});
app.post('/api/customer', (req, res) => {
    //Get payload submitted by client - req.body
    const customer = req.body;
    const list = custService.save(customer);
    res.json(list);
});
//URL Params/route params
//http://localhost:3000/api/customers/1
app.get('/api/customers/:id', (req, res) => {
    const id = parseInt(req.params.id); //string
    res.end('GoT' + id);
});

app.listen(8080, () => console.log('Express server is ready!'));