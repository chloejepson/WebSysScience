var app = require('express')();
var http = require('http').Server(app);
var https= require('https');
const MongoClient= require('mongodb').MongoClient;
const path = require('path');
//var io = require('socket.io')(http);
const mongoose = require("mongoose");
//app.set('view engine', 'ejs');
const express= require('express');
const bodyParser= require("body-parser");
const uri= "mongodb+srv://chloejepson:chloeclover@cluster0.fpqey.mongodb.net/pokemonDB";

//app.use(express.static(__dirname ));
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, '../frontend/lab5/dist/lab5')));
// server route handler
app.get('/', function(req, res){
    res.sendFile( __dirname, '../frontend/lab5/src/app/index/index.component.html');
});

app.get('/api', function(req, res) {
	res.json({'test': 'api'});
});

//connect to database
mongoose.connect("mongodb+srv://chloejepson:chloeclover@cluster0.fpqey.mongodb.net/pokemonDB", {useNewURLParser: true}, {useUnifiedTopology: true})
.then(()=>{
    console.log("connected to mongoDB");
})
.catch((err)=>{
    //send error if unable to connect
    console.log("not connected to mongoDB");
})


app.post('/submit-pokemon', function(req, res){
    //prepare json format
    response={
        newPokemon:req.body.newPokemon,
        newLocation:req.body.newLocation
    };
    console.log(response);
    res.end(JSON.stringify(response));
    //this redirects to a new page and prints out the response
    //document.getElementById('outputTitle').innerHTML= `New Pokemon Found!`
});

app.delete('/db/:id', function(req, res){
    console.log("in the delete function");
    const search_term= req.body.pokemonNumber2;
    req.params= {"id": search_term};
    res.send(req.params);
    MongoClient.connect(uri, {useUnifiedTopology: true}, function(err, client){
        if (err) {return console.dir(err); }
        console.log("connected to DB");
        var db= client.db("pokemonDB");
        db.collection('myPokemon').drop( function(err){
            if (err) {return console.log('error')};
            console.log("Documents removed.");
        });

    });
});

app.post('/db/:id', function(req, res){
    console.log("in the put function");
    const search_term= req.body.pokemonNumber3;
    req.params= {"id": search_term};
    res.send(req.params);
    MongoClient.connect(uri, {useUnifiedTopology: true}, function(err, client){
        //insert code on how to edit db documents in collection here
    });
});

app.get('/db/:id', function(req, res){
    
    console.log("in get function");
    const search_term= req.body.myPokemonNumber;
    req.params= {"id": search_term};
    res.send(req.params);
    MongoClient.connect(uri, {useUnifiedTopology: true}, function(err, client){
        if (err) {return console.dir(err); }
        console.log("connected to DB");
        var db= client.db("pokemonDB");
        //db.collection("myPokemon").find({_id: search_term}).forEach(printjson);
        //response= db.collection("myPokemon").find({_id: search_term});
        // db.collection('myPokemon').find({_id: search_term}).toArray(function(err, result){
        //     if (err) throw err;
        //     console.log(result);
        //     //res.send(result);
        //   })
        //this is supposed to return the document w/ the id of search term so I though it would 
        result= db.collection('myPokemon').find({_id: search_term});
        console.log(JSON.stringify(result));
        //console.log(Model.find({ id: mongoose.ObjectId(search_term) }));
        //res.end(JSON.stringify(response));
        //document.getElementById('findAnswer').innerHTML= "Answer: ";

        //db.collection("myPokemon").insertMany([{_id: number_term, pokemon: search_term}])
        //db.myPokemon.insert({_id: number_term, })
        //client.close();
    });
    //res.status(204).send();
});

app.post('/db', async function(req, res){
    console.log("in post function");
    const search_term= req.body.myPokemon;
    const number_term= req.body.myPokemonNumber;
    MongoClient.connect(uri, {useUnifiedTopology: true}, function(err, client){
        if (err) {return console.dir(err); }
        console.log("connected to DB");
        var db= client.db("pokemonDB");

        // var counterSchema= mongoose.Schema({
        //     _id: {type: String, required: true},
        //     seq: {type: Number, default: 0}
        // });

        // var counter= mongoose.model('counter', counterSchema);

        //https://web.archive.org/web/20151009224806/http://docs.mongodb.org/manual/tutorial/create-an-auto-incrementing-field/
        // function getNextSequence(name){
        //     var ret = db.collection("counters").findAndModify(
        //         {
        //           query: { _id: name },
        //           update: { $inc: { seq: 1 } },
        //           new: true
        //         }
        //     );
        //  return ret.seq;
        // }

        db.collection("myPokemon").insertMany([{_id: number_term, pokemon: search_term}])
        //db.myPokemon.insert({_id: number_term, })
        //client.close();
    });
    res.status(204).send();

});

app.post('/search-pokemon', async function(req, res){
    console.log("in function");
    const search_term= req.body.searchPokemon;
    const url= `https://pokeapi.co/api/v2/pokemon/` + search_term;
    https.get(url, response=>{
        let pokemon= "";
        response.on("data", data=>{
            pokemon += data;
        });
        response.on("end", ()=>{
            pokemon= JSON.parse(pokemon);
            const name1= pokemon.name;
            const type1= `${pokemon.types[0].type.name}`;
            const hp1=`${Math.floor((Math.random() * pokemon.stats[0].base_stat) + 1)}/${pokemon.stats[0].base_stat}`;
            const cp1= `${pokemon.base_experience}`;
            const weight1= `${pokemon.weight}kg`;
            const height1= `0.${pokemon.height}m`;

            MongoClient.connect(uri, {useUnifiedTopology: true}, function(err, client){
                if (err) {return console.dir(err); }
                console.log("connected to DB");
                var db= client.db("pokemonDB");
                db.collection("pokemonInfo").insertMany([{name: name1, type: type1, hp: hp1, cp: cp1, weight: weight1, height:  height1}])
                //client.close();
            });
        });
    });
    res.status(204).send();
});


// //portion of creating my own api below
const PORT= 3000;
app.listen(
    PORT,
    ()=> console.log(`its alive on http://localhost:${PORT}`)
)

//var bodyParser= require('body-parser');
const { Http2ServerRequest } = require('http2');
const { mainModule } = require('process');
app.use(bodyParser.json()); //to support json encoded bodies
// app.use(bodyParser.urlencoded({ //to support url encoded bodies
//     extended: false
// }));
var urlencodedParser= bodyParser.urlencoded({extended : false});
// app.post('/submit-pokemon', urlencodedParser, function(req, res){
//     console.log(req.body);
//     res.json('submit-pokemon', {qs: req.body});
// });



var pokeURL= 'https://pokeapi.co/api/v2/location-area/'
// http.get('https://pokeapi.co/api/v2/location-area/',(resp) =>{

// })

//add an endpoint to the api
// app.post('/newPokemon/:id', (req, res)=>{
//     const {id}= req.params;
//     const{location}= req.body;
//     const pokemon= document.getElementById('sendPokemon').value()
//     const location= document.getElementById('sendLocation').value()
//     const sendPokemon= document.getElementById('send-btn')

//     //sendPokemon.addEventListener('click', () => getPokemonData(search_term.value))
//     res.status(200).send({
//         location: `${location}`,
//         pokemon: `${pokemon}`
//     })
// });




// app.post('/search-pokemon', async function(req, res){
//     console.log("in function");
//     //(document.getElementById('update_name')as HTMLFormElement).innerHTML = "here";
//     //const search_term= (document.getElementById('search_q')as HTMLFormElement);
//     const search_term= req.body.searchPokemon;
//     //const url= new URL(`https://pokeapi.co/api/v2/pokemon/` + search_term);
//     const url= `https://pokeapi.co/api/v2/pokemon/` + search_term;
//     //const response= await fetch(url.toString());

//     // pokemonForDB={
//     //     name: name1,
//     //     type: type1,
//     //     hp: hp1,
//     //     cp: cp1,
//     //     weight: weight1,
//     //     height: height1
//     // }

//     // const pokemonForDB= mongoose.model("pokemon", pokemonForDB);
//     //module.exports= pokemonForDB;
//     https.get(url, response=>{
//         let pokemon= "";
//         response.on("data", data=>{
//             pokemon += data;
//         });
//         response.on("end", ()=>{
//             pokemon= JSON.parse(pokemon);
//             const name1= pokemon.name;
//             const type1= `${pokemon.types[0].type.name}`;
//             const hp1=`${Math.floor((Math.random() * pokemon.stats[0].base_stat) + 1)}/${pokemon.stats[0].base_stat}`;
//             const cp1= `${pokemon.base_experience}`;
//             const weight1= `${pokemon.weight}kg`;
//             const height1= `0.${pokemon.height}m`;

//             MongoClient.connect(uri, {useUnifiedTopology: true}, function(err, client){
//                 if (err) {return console.dir(err); }
//                 console.log("connected to DB");
//                 var db= client.db("pokemonDB");
//                 db.collection("pokemonInfo").insertMany([{name: name1, type: type1, hp: hp1, cp: cp1, weight: weight1, height:  height1}])
//                 //db.collection("pokemonInfo").insertMany([{name: name1},{type: type1}, {hp: hp1}, {cp: cp1}, {weight: weight1}, {height: height1}])
//                 //client.close();
//             });
//         });
//     });
//     // //const pokemon= await response.json();
//     // const name1= pokemon.name;
//     // const type1= `${pokemon.types[0].type.name}`;
//     // const hp1=`${Math.floor((Math.random() * pokemon.stats[0].base_stat) + 1)}/${pokemon.stats[0].base_stat}`;
//     // const cp1= `${pokemon.base_experience}`;
//     // const weight1= `${pokemon.weight}kg`;
//     // const height1= `0.${pokemon.height}m`;

//     // let newPokemon= new pokemonForDB({
//     //     name: name1,
//     //     type: type1,
//     //     hp: hp1,
//     //     cp: cp1,
//     //     weight: weight1,
//     //     height: height1
//     // });
//     // newPokemon.save();
//     res.status(204).send();
//     //res.redirect('/search-pokemon');
// });

