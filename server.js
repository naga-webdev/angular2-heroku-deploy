// server.js
const express = require('express');
const app = express();
const path = require('path');
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);

// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS
const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}
// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL());



var mongo = require('mongojs');
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');


app.post('/addTodo',function(req,res){
    var todo = {
        task:req.body,
        completed:false,
        created:new Date(),
        updated:null
    };

     MongoClient.connect('mongodb://naga:password@ds057066.mlab.com:57066/mytodo', function (err, db) {

        assert.equal(err, null);
        console.log("Successfully connected to MongoDB.");

        db.collection('todos').insert(todo).toArray(function (err, docs) {
            assert.equal(err, null);
            db.close();
            res.json(docs)
        });

    });
})


app.get('/showTodos',function(req,res){

    MongoClient.connect('mongodb://naga:password@ds057066.mlab.com:57066/mytodo', function (err, db) {

        assert.equal(err, null);
        console.log("Successfully connected to MongoDB.");

        db.collection('todos').find({}).toArray(function (err, docs) {
            assert.equal(err, null);
            db.close();
            res.json(docs)
        });

    });
})

app.put('/updateTodo/:id',function(req,res){ 
    var id = req.params.id;

    MongoClient.connect('mongodb://naga:password@ds057066.mlab.com:57066/mytodo', function (err, db) {

        assert.equal(err, null);
        console.log("Successfully connected to MongoDB.");

        db.collection('todos').findAndModify({
            query: { _id: mongo.ObjectId(id) },
            update: {
                $set: {
                    completed : true,
                    updated: new Date()
                }
            },
            new: true
        },function (err, docs) {
                assert.equal(err, null);
                db.close();
                res.json(docs)
            });

        });
})

app.delete('/deleteTodo/:id',function(req,res){
    var id = req.params.id;
    MongoClient.connect('mongodb://naga:password@ds057066.mlab.com:57066/mytodo', function (err, db) {

        assert.equal(err, null);
        console.log("Successfully connected to MongoDB.");

        db.collection('todos').remove({_id:mongo.ObjectId(id)},function (err, docs) {
            assert.equal(err, null);
            db.close();
            res.json(docs)
        });

    });
})

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});