const mongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://himarket:321hi963markeT@geonosis.mongodb.umbler.com:35797/?authSource=hclient&readPreference=primary&appname=MongoDB%20Compass&ssl=false';

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

module.exports = url;