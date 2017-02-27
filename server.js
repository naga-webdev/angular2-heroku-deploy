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




var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

app.get('/fetch',function(req,res){
    MongoClient.connect('mongodb://naga:password@ds057066.mlab.com:57066/mytodo', function (err, db) {

        assert.equal(err, null);
        console.log("Successfully connected to MongoDB.");

        var query = {};        //{"category_code": "biotech"};
        var projection = {"_id":0};

        db.collection('todos').find(query,projection).toArray(function (err, docs) {

            assert.equal(err, null);
            assert.notEqual(docs.length, 0);

            docs.forEach(function (doc) {
                console.log(doc);
            });

            db.close();
            res.json(docs)
        });

    });
    
    //res.json("home page");

});


// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});