var express = require('express');
const { route } = require('.');
const mongo = require('mongodb');
const { db } = require('../database/dbcon');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    db.collection("Users").find().toArray()
        .then((users) => res.json(users));
});

/* Create new Coupon User and return Id */
router.post('/', function(req, res, next) {
    db.collection("Users").insertOne( {coupons: []} )
        .then((newUser) => res.json({id: newUser.insertedId}))
        .catch(() => console.log("Error deleting"));
});

/* Delete all user documents (for development) */
router.post('/deleteAll', function(req,res,next) {
    db.collection("Users", ).deleteMany({})
    .then(() => console.log("All users deleted from database"));
})
/* GET single user document by id */
router.get('/user/:id', function(req, res, next) {
    var query = { "_id": mongo.ObjectId(req.params.id)};
    db.collection("Users").findOne(query)
    .then((user) => res.json(user));
});

/* GET users by code */
router.get('/code/:code', function(req, res, next) {
    var query = { 'coupons.code': req.params.code};
    console.log(query);
    db.collection("Users").find(query).toArray()
        .then((users) => res.json(users));
})

/* Get users based on search */
router.get('/search/:filter/:search', function(req, res, next) {
    if (req.params.filter == "id" && req.params.search == "") {
        res.redirect('/users/user/'+req.params.search);
    } else if (req.params.filter == "code" && req.params.search == "") {
        res.redirect('/users/code/' + req.params.search);
    } else {
        res.redirect('/users');
    }
})

/* Add coupon to user id document */
router.post('/:id', function(req, res, next) {
    var query = { "_id": mongo.ObjectId(req.params.id)};
    var newValues = { $set: {}}
    var storeName = "example2";
    var storeUrl = "https://www.example2.com";
    var code = "freeStuff";
    db.collection("Users").findOneAndUpdate(
        query,
        {$addToSet: {coupons: {storeName: storeName,
                            storeURL: storeUrl,
                            code: code}}},
        {returnNewDocument: true})
        .then(user => {
            console.log(user);
            res.json(user);
        });
    //result.then(user => {
        
        // var user = JSON.parse(user);
        // user.coupons.append({storeName: storeName,
        //                 storeURL: storeUrl,
        //                 code: code});
        // console.log(user);
    //})
    
    //res.json(user);
})
module.exports = router;
