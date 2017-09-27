const express = require('express');
const app = express();
const Service = require('./services');
var service = new Service();

app.get('/api/customer/:id', (req,res)=> {
    var id = req.params.id;
    var data = service.getById(id);
    res.send(data);
});

app.listen(8000, ()=> {
    console.log('Server Started');
});