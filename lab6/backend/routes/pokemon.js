const express= require('express')
const router= express.Router()
const path= require('path');
const PokemonModel= require('../models/poke')
const MongoClient= require('mongodb').MongoClient;
const app= express()
module.exports= router

//adding one in here from the api and html

app.use(express.static(path.join(__dirname, '../frontend/lab6/dist/lab6')));
// server route handler
app.get('/', function(req, res){
    res.sendFile( __dirname, '../frontend/lab6/src/app/app.component.html');
});

// app.post('/search-pokemon', async function(req, res){
//     console.log("in function");
//     const search_term= req.body.searchPokemon;
//     const url= `https://pokeapi.co/api/v2/pokemon/` + search_term;
//     const name1= "";
//     const type1= "";
//     https.get(url, response=>{
//         let pokemon= "";
//         response.on("data", data=>{
//             pokemon += data;
//         });
//         response.on("end", ()=>{
//             pokemon= JSON.parse(pokemon);
//             name1= pokemon.name;
//             type1= `${pokemon.types[0].type.name}`;
//             const hp1=`${Math.floor((Math.random() * pokemon.stats[0].base_stat) + 1)}/${pokemon.stats[0].base_stat}`;
//             const cp1= `${pokemon.base_experience}`;
//             const weight1= `${pokemon.weight}kg`;
//             const height1= `0.${pokemon.height}m`;

//         });
//     });
//     //mongodb+srv://chloejepson:chloeclover@cluster0.70eut.mongodb.net/test"
//     const uri= "mongodb+srv://chloejepson:chloeclover@cluster0.70eut.mongodb.net/test";
//     MongoClient.connect(uri, {useUnifiedTopology: true}, function(err, client){
//         if (err) {return console.dir(err); }
//         console.log("connected to DB");
//         var db= client.db("lab6db");
//         const pokemon= new PokemonModel({
//             name: name1,
//             powers: type1
//         })
//         try{
//             db.collection('newapi').insertOne(pokemon);
//             res.status(201).json(newPokemon)
//         }catch(err){
//             res.status(400)
//         }

//     });
    
// })


// app.post('/search-pokemon', async function(req, res){
//     console.log("in function");
//     const search_term= req.body.searchPokemon;
//     const url= `https://pokeapi.co/api/v2/pokemon/` + search_term;
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
//                 //client.close();
//             });
//         });
//     });
//     res.status(204).send();
// });


//Getting All
router.get('/', (req, res)=>{
    res.send('hello world')
});

//Getting one
router.get('/:id', (req, res)=>{

});


//Creating one
router.post('/:id', (req, res)=>{

});

//updating one
router.patch('/:id', (req, res)=>{

});

//deleting one

router.delete('/:id', (req, res)=>{

});