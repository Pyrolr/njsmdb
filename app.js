var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./User.model');

var port = 3001;

app.listen(port, function() {
    console.log("Server started on 3001");
});

var db = 'mongodb://localhost/ems_management';

mongoose.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.get('/getUsers', function(req,res){
    
    User.find({}).exec(function(err,users){
        if (err){
            res.send("Some error occured:" + err);
        } else {
            res.json(users);
        }
    });
});

app.post('/adduser', function(req,res){

    User.create(req.body,function (err,book){
        if(err) {
            res.send("Some error occured during the creation" + err);
        } else {
            res.status(200);
            res.send("New User added");
        }
    });

});