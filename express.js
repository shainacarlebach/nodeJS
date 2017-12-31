var express = require('express');
var dal = require('./connection.js');

var app = express();


app.get('/', function (req, res) {
   console.log('/');
   res.end('/');
});

app.get('/products', function (req, res) {
    
    dal.getAll('select * from products',function(err, products) {
        if (err) {
            res.end('Sorry Dude!');
        }
        res.end(JSON.stringify(products));
    })
});

app.get('/shippers',function(req,res){
    dal.getAll('select * from shippers',function(err,shippers){
        if(err) {
            res.end('Sorry Dude!');
        }
        res.end(JSON.stringify(shippers));
    })
});
            
app.get('/suppliers',function(req,res){
    dal.getAll('select * from suppliers',function(err,suppliers){
        if(err) {
            res.end('Sorry Dude!');
        }
        res.end(JSON.stringify(suppliers));
    })
});
            
 app.post('/product', function (req, res) {c
    console.log('/product');
    res.end('product');
 })


app.listen(1300)