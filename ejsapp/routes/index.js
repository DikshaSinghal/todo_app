var express = require('express');
var router = express.Router();
var mydata = require('../modules/mydata');
var persons = mydata.find({});
var bodyParser = require('body-parser')
/* GET home page. */
var app = express();
app.use(bodyParser.urlencoded({ extended: false }))

router.get('/', function(req, res, next) {
  res.render('index', { title: 'To Do List', message:'Enter things you want to add to your list'});
});


router.post('/',function(req, res, next){
       var details = new mydata({
         thing: req.body.Thing,
         date: req.body.Date,
       })
       details.save();
       // details.save(function(err,res){
       //      if(err) throw error;
       //      console.log(res);});
       console.log("yes");
       persons.exec(function(err, data){
         if(err) throw err;
         console.log(data.json)
         console.log("yes1");
         res.render('mylist',{title: 'mylist', message1: 'Here is your updated todo list.', records:data});
       })


});
module.exports = router;
