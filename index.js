var express = require('express');
var app = express();

var things = require('./things.js');
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

app.use('/things', things);
app.use('/product', product);

app.use('/offers', offers);


app.get('/hello/:name/:id', function(req, res){
    res.send('The name you specified is ' + req.params.name+ " ,Id is:"+req.params.id);
 });
 
app.get('/hello', function(req, res,next){
   
   if(req.session.page_views){
    req.session.page_views++;
    res.send("You visited this page " + req.session.page_views + " times");
 } else {
    req.session.page_views = 1;
    res.send("Welcome to this page for the first time!");
 }
   next();
});


app.post('/hello', function(req, res){
    res.send("You just called the post method at '/hello'!\n");
 });

 app.all('/test', function(req, res){
    res.send("HTTP method doesn't have any effect on this route!");
 });

 app.use('/hello', function(req, res){
    console.log('End');
 });

app.listen(3000);
//REPL means Read-Eval-Print-Loop. We can quickly test our JavaScript code in the Node.js REPL environment.

//Synchronous execution usually refers to code executing in sequence.
// alert(1);
// alert(2);
// alert(3);

//ASynchronous
// alert(1);
// setTimeout(() => alert(2), 0);
// alert(3);

// Blocking refers to operations that block further execution until that operation finishes. 
// Non-blocking refers to code that doesn't block execution. 
// In the given example, localStorage is a blocking operation as it stalls execution to read.
// On the other hand, fetch is a non-blocking operation as it does not stall alert(3) from execution.
// Blocking: 1,... 2
// alert(1);
// var value = localStorage.getItem('foo');
// alert(2);

// // Non-blocking: 1, 3,... 2
// alert(1);
// fetch('example.com').then(() => alert(2));
// alert(3);