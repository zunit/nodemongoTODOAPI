const {MongoClient, ObjectID} = require('mongodb');

// url where the db live.
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert to do', err);
  //   }
  //   console.log(JSON.stringify(result.ops));
  // });

  // Insert new doc into Users (name, age, location)
  db.collection('Users').insertOne({
    name: 'Jared',
    age: 52,
    location: 'Toronto'
  }, (err, result) => {
    if (err){
      return console.log('Unable to insert into User collection');
    }
    console.log(JSON.stringify(result.ops));
  });

  client.close(); // close the connection with the db.
});
