const {MongoClient, ObjectID} = require('mongodb');

// url where the db live.
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  // connecting to DB
  const db = client.db('TodoApp');

  // findOneAndUpdate(filter, update, option, callback);
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5c5a01719806b0667d83e4e2")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(JSON.stringify(result, undefined, 2));
  // });

  // update the User collection
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5c5a03d48d99e369450cc626")
  }, {
    $set: {
      name: "LanLan"
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  client.close(); // close the connection with the db.
});
