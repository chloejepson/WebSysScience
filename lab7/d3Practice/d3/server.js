const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { MongoClient, ServerApiVersion } = require('mongodb');

/* This is where the Angular files live after they are built.  */
app.use(express.static(path.join(__dirname, './d3/dist/d3')));

app.listen(port, () => {
  console.log('Listening on *:3000');
});

const uri = "mongodb+srv://chloejepson:chloeclover@cluster0.gyqpq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



app.get('/api', function(req, res){
  //res.json({'test': 'api'});
  client.connect(err => {
    const collection = client.db("lab7db").collection("countries");
    //res.json(client.db("lab7db").collection("countries").find({}));

    client.db("lab7db").collection("countries").find({}).toArray(function(err, results){
      console.log(results);
      res.json(results);
  })
  });
});

app.get('/', function(req, res){
  res.json({'test': 'api'});
});



//make endpoint in node
//and have anular talk to node
//write logic to fetch external data in node
//two independent projects
//frontent just displays data from backend







