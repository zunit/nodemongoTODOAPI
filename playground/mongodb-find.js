const {MongoClient, ObjectID} = require('mongodb');

// url where the db live.
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');
  const db = client.db('TodoApp');


  db.collection('Todos').find({completed: true}).toArray().then((docs) =>{
    console.log('TODOs');
    console.log(JSON.stringify(docs, undefined, 2));

  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  client.close(); // close the connection with the db.
});
