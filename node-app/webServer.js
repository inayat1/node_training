/**
 * Http server creation
 * start server - binding server with port
 * Request ,response handling
 */
const http = require('http');

//request - is variable which holds http.ClientRequest Object reference
//response -is variable which holds http.ServerResponse Object Reference
const server = http.createServer((request, response) => { 
    response.write('<h1>Hello</h1>');
});
//bind /allocate memory for socket
server.listen(8080, () => {
    console.log('Server is Ready!');
})