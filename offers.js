var express = require('express');
var router = express.Router();
var fs = require('fs');




var valid_merchants=["amazon","flipkart","snapdeal"];


router.get('/:merchant', function(req, res){
   var merchant=req.params.merchant;
 
   if(valid_merchants.indexOf(req.params.merchant) > -1 )
   {
      
   fs.readFile('./crawler-response.json','utf8', function(err, data) {
      if (err) {
         console.error(err)
         return
       }
      
      var product_details= JSON.parse(data);
      var offers=product_details['product']['website'][0];
      res.json(offers['offers']);

    });

   }
   else{
      res.status(400);
      res.send(JSON.stringify({ "message": "Bad Request – Query param not passed properly" }));
   }
  
     });

router.post('/', function(req, res){
   res.send('POST route on things.');
});

function sw(){
    return "Swapnil";
}

//export this router to use in our index.js
module.exports = router;