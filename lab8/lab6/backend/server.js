// require('dotenv').config()
// const express= require('express');
// const path= require('path');
const mongoose= require("mongoose")
// const app= express()

// app.use(express.static(path.join(__dirname, '../frontend/lab6/dist/lab6')));
// // server route handler
// app.get('/', function(req, res){
//     res.sendFile( __dirname, '../frontend/lab6/src/app/app.component.html');
// });

// mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
// //mongoose.connect("mongodb+srv://chloejepson:chloeclover@cluster0.70eut.mongodb.net/test", {useNewUrlParser: true});
// app.listen(3000, ()=> console.log("server started"));
// const db= mongoose.connection

// db.on("error", (error)=> console.error(error))
// db.once("open", ()=> console.log("connected to db"))

// app.use(express.json())

// const pokemonRouter= require('./routes/pokemon')
// app.use('/submit-pokemon', pokemonRouter)


var app= require('express')();
//var mongoose = require('mongoose');
//require('mongoose-type-url');
var http= require('http').Server(app);
var https= require('https');
//const MongoClient= require('mongodb').MongoClient;
const {MongoClient}= require('mongodb');
const path= require('path');
const express= require('express');
const bodyParser= require("body-parser");
const uri= "mongodb+srv://chloejepson:chloeclover@cluster0.70eut.mongodb.net/test";

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, '../frontend/lab6/dist/lab6')));
// server route handler
app.get('/', function(req, res){
    res.sendFile( __dirname, '../frontend/lab6/src/app/app.component.html');
});
//const PokemonModel= require('/models/poke')

const spawn= require("child_process").spawn;
const pythonProcess= spawn('python', ["pyserver.py"]);
pythonProcess.stdout.on('data', (data)=>{
    console.log("inpython function");
    //convert string to json
    mystr= data.toString();
    //convert string into json
    myjson= JSON.parse(mystr);
    console.log(`Data to String ${mystr} Type of ${typeof mystr}`);
    console.log(`JSON is: ${myjson}`);
    console.log(myjson.Data);
    // console.log(myjson.Response);
    // console.log(myjson.Message);
    MongoClient.connect(uri, {useUnifiedTopology: true}, function(err, client){
        if (err) {return console.dir(err); }
        console.log("connected to DB");
        var db= client.db("lab6db");
    
        db.collection("newapi").insertOne(myjson, function(err, res){
            if (err) throw err;
            console.log("the document got inserted");

        });
    });

});




const dogSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: false
    }
});

const pokeSchema= new mongoose.Schema({
    _id:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: false
    },
    hp:{
        type: String,
        required: false
    },
    cp:{
        type: String,
        required: false
    },
    weight:{
        type: String,
        required: false
    },
    height:{
        type: String,
        required: false
    }
});

const speciesSchema= mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    type:{
        //put scientific name here
        type: String,
        required: false
    },
    location:{
        type: String,
        required: false
    },
    population:{
        type: String,
        required: false
    }
})

module.exports= mongoose.model('Pokemon', pokeSchema)
module.exports= mongoose.model('Speies', speciesSchema)
module.exports= mongoose.model('Dog', dogSchema)

const PORT= 3000;
app.listen(
    PORT,
    ()=> console.log(`its alive on http://localhost:${PORT}`)
)


//THIS IS THE POST REQ
app.post('/search-pokemon', async function(req, res){
    console.log("in function");
    const search_term= req.body.searchPokemon;
    const url= `https://pokeapi.co/api/v2/pokemon/` + search_term;
    var name1= "";
    var type1= "";
    var hp1= "";
    var cp1= "";
    var weight1= "";
    var height1="";

    https.get(url, response=>{
        let pokemon= "";
        response.on("data", data=>{
            pokemon += data;
        });
        response.on("end", ()=>{
            pokemon= JSON.parse(pokemon);
            name1= pokemon.name;
            type1= `${pokemon.types[0].type.name}`;
            hp1=`${Math.floor((Math.random() * pokemon.stats[0].base_stat) + 1)}/${pokemon.stats[0].base_stat}`;
            cp1= `${pokemon.base_experience}`;
            weight1= `${pokemon.weight}kg`;
            height1= `0.${pokemon.height}m`;

        });
    });
    //mongodb+srv://chloejepson:chloeclover@cluster0.70eut.mongodb.net/test"
    const uri= "mongodb+srv://chloejepson:chloeclover@cluster0.70eut.mongodb.net/test";
    MongoClient.connect(uri, {useUnifiedTopology: true}, function(err, client){
        if (err) {return console.dir(err); }
        console.log("connected to DB");
        var db= client.db("lab6db");
        var pokeModel= mongoose.model('pokeModel', pokeSchema);

        const pokemon= new pokeModel({
            _id: name1,
            name: name1,
            type: type1,
            hp: hp1,
            cp: cp1,
            weight: weight1,
            height: height1

        });
        try{
            db.collection('newapi').insertOne(pokemon);
            res.status(201).json(newPokemon)
        }catch(err){
            res.status(400)
        }

    });
    var arr= ["Abyssinian", "Aegean", "American Curl", "American Bobtail", "American Shorthair", "American-Wirehair", "Ariabian Mau", "Australian Mist", "Balinese", "Bambino", "Asian Semi-longhair", "Bengal", "Burmese"];
    var num= Math.floor(Math.random() * arr.length)
    const url2= 'https://catfact.ninja/breeds';
    var name2= "";
    var type2= "";
    var location2= "";
    var population2= "";
    https.get(url2, response=>{
        let animal= "";
        response.on("data", data=>{
            animal += data;
        });
        response.on("end", ()=>{
            animal= JSON.parse(animal);
            name2= animal.data[num].breed;
            type2= animal.data[num].coat;
            location2= animal.data[num].country;
            population2= animal.data[num].origin;
        });
    });

    MongoClient.connect(uri, {useUnifiedTopology: true}, function(err, client){
        if (err) {return console.dir(err); }
        console.log("connected to DB");
        var db= client.db("lab6db");
        var speciesModel= mongoose.model('speciesModel', speciesSchema);

        const animal= new speciesModel({
            name: name2,
            type: type2,
            location: location2,
            population: population2

        });
        try{
            db.collection('newapi').insertOne(animal);
            res.status(201).json(newPokemon)
        }catch(err){
            res.status(400)
        }

    });

    const url3= 'https://dog.ceo/api/breeds/image/random';
    var name3= "";
    var image3= "";
    https.get(url2, response=>{
        let dog= "";
        response.on("data", data=>{
            dog += data;
        });
        response.on("end", ()=>{
            dog= JSON.parse(dog);
            name3= "dog";
            image3= dog.message;
            console.log(dog.message);
        });
    });

    MongoClient.connect(uri, {useUnifiedTopology: true}, function(err, client){
        if (err) {return console.dir(err); }
        console.log("connected to DB");
        var db= client.db("lab6db");
        var dogModel= mongoose.model('dogModel', dogSchema);


        const dog= new dogModel({
            name: name3,
            image: image3

        });
        try{
            db.collection('newapi').insertOne(dog);
            res.status(201).json(newPokemon)
        }catch(err){
            res.status(400)
        }

    });


})

//THIS IS THE WORK W/ OTHER FILE TYPES NOT JUST JSON
app.post('/submit-file', function(req, res){
    var filetype = req.body.filetype;
    var filename = req.body.filename;
    MongoClient.connect(uri, {useUnifiedTopology: true}, function(err, client){
        if (err) {return console.dir(err); }
        console.log("connected to DB in post(submit) request");
        var db= client.db("lab6db");
        db.collection('newapi').find({}).toArray(function(err, result){
            var r= result;

            if(filetype == "JSON"){
                fs.statSync(filename + '.json');
                fs.writeFile(filename + '.json', JSON.stringify(r, null, 4), function(err){
                  if(err) throw err;
                  console.log('JSON file exported.');
                  res.status(204).send();
                });
        
              // CSV:
              } else if (filetype == "CSV"){
                fs.statSync(filename +'.csv');
                jsonexport(r, function(err, csv){
                  if (err) throw err;
                  fs.writeFile(filename + '.csv', csv, function(err){
                    if(err) throw err;
                    console.log('CSV file exported.');
                    res.status(204).send();
                  });
                });
              };
        
        });

    });
});
//THIS IS THE GET REQUEST
app.get('/find-pokemon', (req)=> {
    const uri= "mongodb+srv://chloejepson:chloeclover@cluster0.70eut.mongodb.net/test";
    MongoClient.connect(uri, {useUnifiedTopology: true}, function(err, client){
        if (err) {return console.dir(err); }
        var str1= req.query.pokemonName;
        console.log("connected to DB in get request");
        console.log(str1);
        var db= client.db("lab6db");
        var check= db.collection("newapi").find({});
        console.log(check.toArray);
        db.collection("newapi").find({"_id": str1}).toArray(function(err, results){
            console.log(results);
        });

    });
});

//THIS IS THE DELETE REQUEST BC DB.COLLECTION.DROP
// app.post('/reset', function(){
//     const uri= "mongodb+srv://chloejepson:chloeclover@cluster0.70eut.mongodb.net/test";
//     MongoClient.connect(uri, {useUnifiedTopology: true}, function(err, client){
//         if (err) {return console.dir(err); }
//         console.log("connected to DB in delete request");
//         var db= client.db("lab6db");
//         db.collection("newapi").drop(function(err){
//             if (err) {return console.log('This collection does not exist. Try and query something.')};
//             console.log("Documents successfully removed from collection.");
//         })

//     });
// });


// app.delete('/reset', function(res){
//     const uri= "mongodb+srv://chloejepson:chloeclover@cluster0.70eut.mongodb.net/test";
//     MongoClient.connect(uri, {useUnifiedTopology: true}, function(err, client){
//         if (err) {return console.dir(err); }
//         console.log("connected to DB in delete request");
//         var db= client.db("lab6db");
//         // db.collection("newapi").drop(function(err){
//         //     if (err) {return console.log('This collection does not exist. Try and query something.')};
//         //     console.log("Documents successfully removed from collection.");
//         // })

//         db.collection("newapi").drop(function(err){
//             if (err) {return console.log('This collection does not exist. Try and query something.')};
//             console.log("Documents successfully removed from collection.");
//         });
//         res.send({type: 'DELETE'});

//     });
// });

app.delete('/reset', (req, res)=>{
    const uri= "mongodb+srv://chloejepson:chloeclover@cluster0.70eut.mongodb.net/test";
    MongoClient.connect(uri, {useUnifiedTopology: true}, function(err, client){
        if (err) {return console.dir(err); }
        console.log("connected to DB in delete request");
        var db= client.db("lab6db");
        // db.collection("newapi").drop(function(err){
        //     if (err) {return console.log('This collection does not exist. Try and query something.')};
        //     console.log("Documents successfully removed from collection.");
        // })

        db.collection("newapi").drop(function(err){
            if (err) {return console.log('This collection does not exist. Try and query something.')};
            console.log("Documents successfully removed from collection.");
        });
        res.send({type: 'DELETE'});

    });
})

//THIS IS THE PUT REQUEST TO EDIT
// app.post('/updateName', function(req){
//     const uri= "mongodb+srv://chloejepson:chloeclover@cluster0.70eut.mongodb.net/test";
//     MongoClient.connect(uri, {useUnifiedTopology: true}, function(err, client){
//         if (err) {return console.dir(err); }
//         console.log("connected to DB in put request");
//         var db= client.db("lab6db");
//         db.collection("newapi").updateOne(
//             {_id: req.query.pokemonID},{
//                 $set: {"name": req.query.pokemonName},
//                 $currentDate: { lastModified: true }
//             }
            
//         )

//     });
// });


app.put('/updateName', function(req, res){
    const uri= "mongodb+srv://chloejepson:chloeclover@cluster0.70eut.mongodb.net/test";
    MongoClient.connect(uri, {useUnifiedTopology: true}, function(err, client){
        if (err) {return console.dir(err); }
        console.log("connected to DB in put request");
        var db= client.db("lab6db");
        var oldName= req.query.pokemonID2;
        console.log(oldName);
        var newName= req.query.pokemonName2;
        console.log(newName);
        // module.exports.updateObject= function(newName, options, callback){
        //     var query= {name: oldName};
        //     var update={
        //         name: newName
        //     }

        //     db.findOneAndUpdate(query, update, options, callback);
        // };

        // Object.updateObject(newName, function(err, object){
        //     if(err){
        //         res.json(err);
        //     }
        //     res.json(newName);
        // });
        db.collection("newapi").findOneAndUpdate({_id: oldName}, {$set: {oldName: newName}}).then(res.status(200));

    });
});









