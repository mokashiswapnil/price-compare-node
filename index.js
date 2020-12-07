var express = require('express');
var app = express();

var product= require('./product.js');
var offers= require('./offers.js');

var session = require('express-session');

app.use(session({secret: "#FFDDFDFF"}));

// Middleware
app.use(function(req, res, next){
    
    //This function call is very important. It tells that more processing is
    //required for the current request and is in the next middleware
    //function/route handler.

    if (!req.accepts('json')) {
       res.send({ error: 'Not found' });
       return;
     }

    if(req.get('auth-key') == 'sdfsdf')
    {
      next();
    }
    else{
      res.status(401);
      res.end(JSON.stringify({ "message": "Invalid auth key" }));
    }
    
 });

app.use('/product', product);

app.use('/offers', offers);



app.listen(3000);
