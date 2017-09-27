/**
 * Router Specific middleware-Module based
 */
/* Router level middlewares
*/
const express = require('express');
const app = express();
//Router Object
const router = express.Router();

router.use((req, res, next) => {
   console.log('User Router');
   next();
})
router.use('/user/:id', function (req, res, next) {
   console.log('Request URL:', req.originalUrl)
   next()
}, function (req, res, next) {
   console.log('Request Type:', req.method)
   next()
});
router.get('/user/:id', function (req, res) {
   res.end('special')
});
// mount the router on the app
app.use('/', router);

app.listen(8080, () => console.log('Server is Ready!'));
