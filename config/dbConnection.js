/*const mongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://site:321admin987_@kamino.mongodb.umbler.com:41549/?authSource=site&readPreference=primary&appname=MongoDB%20Compass&ssl=false';

// Use connect method to connect to the Server
mongoClient.connect(url,{useUnifiedTopology: true}, function(err, db) {
  if(!err) console.log("Connected successfully mongoDB");
});

//db = mongoClient.db(dbName);//ver dps

process.on('SIGINT', () =>
    mongoClient.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = url;*/