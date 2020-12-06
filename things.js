var express = require('express');
var router = express.Router();


var movies = [
    {id: '101', name: "Fight Club", year: 1999, rating: 8.1},
    {id: '102', name: "Inception", year: 2010, rating: 8.7},
    {id: '103', name: "The Dark Knight", year: 2008, rating: 9},
    {id: '104', name: "12 Angry Men", year: 1957, rating: 8.9}
 ];

 
router.get('/movies', function(req, res){

res.json(movies);
});


router.get('/movies/:id', function(req, res){
    var currentMovie=movies.filter(
        function(movie){
            if(movie.id == req.params.id){
               return true;
            }
         }
    );
    
    if(currentMovie.length == 1){
        res.json(currentMovie[0])
     } else {
        res.status(404);//Set status to 404 as movie was not found
        res.json({message: "Not Found"});
     }

    });

    router.delete('/movies/:id', function(req, res){
        // console.log(req.params.id);
        var removeIndex = movies.map(
            function(movie)
            {
                console.log(movie.id);
                 return movie.id;
            }   
        ).indexOf(req.params.id); //Gets us the index of movie with given id.
        
        if(removeIndex === -1){
           res.json({message: "Not found"});
        } else {
           movies.splice(removeIndex, 1);
        //    res.send({message: "Movie id " + req.params.id + " removed."});
            movies[0].name=sw();
           res.json(movies);
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