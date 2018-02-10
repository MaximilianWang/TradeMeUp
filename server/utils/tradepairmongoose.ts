import * as mongoose from 'mongoose';
let uri = 'mongodb://localhost/heroes';
mongoose.connect(uri, (err) => {
  if (err) {
    console.log(err.message);
    console.log(err);
  }
  else {
    console.log('Connected to MongoDb');
  }
});

