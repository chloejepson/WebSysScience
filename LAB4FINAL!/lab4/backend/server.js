var app = require('express')();
var http = require('http').Server(app);
const path = require('path');
//var io = require('socket.io')(http);
//var mongoose = require('mongoose');
//app.set('view engine', 'ejs');
const express= require('express');
//app.use(express.static(__dirname ));
app.use(express.json())

app.use(express.static(path.join(__dirname, '../frontend/lab4/dist/lab4')));
// server route handler
app.get('/', function(req, res){
    res.sendFile( __dirname, '../frontend/lab4/src/app/app.component.html');
});

app.get('/api', function(req, res) {
	res.json({'test': 'api'});
});


// //portion of creating my own api below
const PORT= 3000;
app.listen(
    PORT,
    ()=> console.log(`its alive on http://localhost:${PORT}`)
)

var bodyParser= require('body-parser');
const { Http2ServerRequest } = require('http2');
app.use(bodyParser.json()); //to support json encoded bodies
// app.use(bodyParser.urlencoded({ //to support url encoded bodies
//     extended: false
// }));
var urlencodedParser= bodyParser.urlencoded({extended : false});
// app.post('/submit-pokemon', urlencodedParser, function(req, res){
//     console.log(req.body);
//     res.json('submit-pokemon', {qs: req.body});
// });

app.post('/submit-pokemon', urlencodedParser, function(req, res){
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

