const mongoose= require("mongoose")
var app= require('express')();
var http= require('http').Server(app);
var https= require('https');
const {MongoClient}= require('mongodb');
const path= require('path');
const express= require('express');
const bodyParser= require("body-parser");
const { response } = require("express");
const uri = "mongodb+srv://chloejepson:chloeclover@cluster0.8otxc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//const { MongoClient, ServerApiVersion } = require('mongodb');

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, '../frontend/quiz2/dist/quiz2')));
// server route handler
app.get('/', function(req, res){
    res.sendFile( __dirname, '../frontend/quiz2/src/app/app.component.html');
});

const PORT= 3000;
app.listen(
    PORT,
    ()=> console.log(`its alive on http://localhost:${PORT}`)
)


//perform get/mongo
//perform get/monog/number
//do same for post, put, delete



MongoClient.connect(uri, {useUnifiedTopology: true}, function(err, client){
    if (err) {return console.dir(err); }
    console.log("connected to DB");
    var db= client.db("quiz2db");

    
});

//get a listing of all nodes
//DUMPS ALL INTO CONSOLE
//sorry, not enough time to fiure out how to return all of the names
app.get('/mongo', (req)=>{
    const uri = "mongodb+srv://chloejepson:chloeclover@cluster0.8otxc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    MongoClient.connect(uri, {useUnifiedTopology: true}, function(err, client){
        if (err) {return console.dir(err); }
        var str1= req.query.pokemonName;
        console.log("connected to DB in GET request");
        console.log(str1);
        var db= client.db("quiz2db");
        db.collection("countryData").find({}).toArray(function(err, results){
            console.log(results);
        });
    });
});

//sends the data of one country to the console
app.get('/mongo/:number', (req)=>{
    const getID= req.query.getNumber;
    const uri = "mongodb+srv://chloejepson:chloeclover@cluster0.8otxc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    MongoClient.connect(uri, {useUnifiedTopology: true}, function(err, client){
        if (err) {return console.dir(err); }
        console.log("connected to DB in GET request");
        var db= client.db("quiz2db");
        // db.collection("countryData").find({}).toArray(function(err, results){
        //     console.log(results);
        // });
        console.log(getID);
        db.collection("countryData").find({"Country": getID}).toArray(function(err, results){

            console.log(results);
        });
    });
});

const countrySchema= mongoose.Schema({
    Country:{
        type: String,
        required: true
    },
    GDP:{
        type: String,
        required: true
    }
});

module.exports= mongoose.model('CountryGDP', countrySchema)

//post a country and its gdp with /mongo
app.post('/mongo', function(req, res){
    var countryNameQ= req.query.postCountryName;
    var countryGDPQ= req.query.postCountryGDP;
    const uri = "mongodb+srv://chloejepson:chloeclover@cluster0.8otxc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    MongoClient.connect(uri, {useUnifiedTopology: true}, function(err, client){
        if (err) {return console.dir(err); }
        console.log("connected to DB in POST request");
        var db= client.db("quiz2db");
        var countryModel= mongoose.model('countryModel', countrySchema);
        const country= new countryModel({
            Country: countryNameQ,
            GDP: countryGDPQ
        });

        try{
            db.collection('countryData').insertOne(country);
            console.log("inserted document");
        }catch(err){
            res.status(400)
        }
    });

});

app.post('/mongo/:number', function(res){
    return response
        .status(HttpStatus.UNAUTHORIZED)
        .send(new MyError('Unauthorized', ['cannot recieve access to this info']))
})


//update a document in the db
app.put('/mongo', function(req, res){
    var countryNameQ= req.query.putCountryName;
    var countryGDPQ= req.query.putCountryGDP;
    const uri = "mongodb+srv://chloejepson:chloeclover@cluster0.8otxc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    MongoClient.connect(uri, {useUnifiedTopology: true}, function(err, client){
        if (err) {return console.dir(err); }
        console.log("connected to DB in PUT request");
        db.collection("newapi").findOneAndUpdate({Country: countryNameQ}, {$set: {GDP: countryGDPQ}}).then(res.status(200));
        console.log("updated document");
    });
});


app.delete('/mongo', function(req, res){
    var countryNameQ= req.query.deleteCountryName;
    var countryGDPQ= req.query.deleteCountryGDP;
    const uri = "mongodb+srv://chloejepson:chloeclover@cluster0.8otxc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    MongoClient.connect(uri, {useUnifiedTopology: true}, function(err, client){
        if (err) {return console.dir(err); }
        console.log("connected to DB in PUT request");
        db.collection("newapi").findOneAndUpdate({Country: countryNameQ}, {$set: {GDP: countryGDPQ}}).then(res.status(200));
        console.log("updated document");
    });
});