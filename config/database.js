const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://AdminUser:mongo1234@owenscluster.mdb9k.mongodb.net/osully-ireland-project?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});