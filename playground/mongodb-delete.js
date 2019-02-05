const {MongoClient, ObjectID} = require('mongodb');

// url where the db live.
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  // connecting to DB
  const db = client.db('TodoApp');

  /* Hierarchy
    DB => Collection => Record
  */

  //Delete Many
  // db.collection('Users').deleteMany({
  //   name: 'Jack'
  // }).then((result) => {
  //   console.log(result);
  // });

  // Delete One
  // db.collection('Todos').deleteOne({
  //   text: 'Eat Lunch'
  // }).then((result) => {
  //   console.log(result);
  // });

  // FindOneDelete
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("5c5a03ea37b9e86954db3640")
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  client.close(); // close the connection with the db.
});
