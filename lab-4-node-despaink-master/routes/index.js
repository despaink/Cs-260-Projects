var express = require('express');
var router = express.Router();
var request= require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
 /* res.render('index', { title: 'Express'});*/
 res.sendFile('weather.html', { root:  'public' });
    

});

router.get('/getcity',function(req,res,next) {
      var fs = require('fs');

    console.log("In getcity route");
    
    fs.readFile(__dirname + '/cities.dat.txt',function(err,data) {
      if(err) throw err;
      var cities = data.toString().split("\n");
      var myRe = new RegExp("^" + req.query.q);
      //console.log(myRe);
      
        var jsonresult = [];
        for(var i = 0; i < cities.length; i++) {
          var result = cities[i].search(myRe); 
          if(result != -1) {
           // console.log(cities[i]);
            jsonresult.push({city:cities[i]});
          } 
        }   
//console.log(jsonresult);
res.status(200).json(jsonresult);
    

    });
    

    
  });
  
  router.get('/owl', function(req,res){
    var url="https://owlbot.info/api/v1/dictionary/";
    console.log("in owl");
    console.log("query",req.query);
    url+= req.query['q'];
    url += "?format=json";
    console.log(url);
    request(url).pipe(res);

});

module.exports = router;
