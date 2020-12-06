var express = require('express');
var router = express.Router();
var fs = require('fs');
var fs = require('fs');


var valid_parameters=["iphone 12 pro max","iphone 12 pro”","one plus 8"];
var valid_merchants=["amazon","flipkart","snapdeal"];

router.get('/details', function(req, res){
 
   fs.readFile('./crawler-response.json','utf8', function(err, data) {
      console.log("valid_parameters.indexOf(req.query.productName):"+valid_parameters.indexOf(req.query.productName));
      if(valid_parameters.indexOf(req.query.productName) > -1 )
      {
         
         var product_details= JSON.parse(data);
         res.json(product_details['product']['details']);
      }
      else{
         res.status(400);
         res.end(JSON.stringify({ "message": "Bad Request – Query param not passed properly!" }));
      }

      
});
});




router.get('/:merchant', function(req, res){

   fs.readFile('./crawler-response.json','utf8', function(err, data) {
      var product_details= JSON.parse(data);
      if(valid_merchants.indexOf(req.params.merchant) > -1 ){
         res.end(JSON.stringify({ "price": product_details['product']['website'][valid_merchants.indexOf(req.params.merchant)]['price'] }));
      }
      else{
         res.status(400);
         res.end(JSON.stringify({ "message": "Bad Request – Query param not passed properly" }));
      }


});

   // var mer=req.params.merchant;
   // console.log(price[mer]);
   // res.json(price[mer]);

     });

router.post('/', function(req, res){
   res.send('POST route on things.');
});

function sw(){
    return "Swapnil";
}

//export this router to use in our index.js
module.exports = router;