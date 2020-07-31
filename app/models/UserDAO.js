const MongoClient = require('mongodb').MongoClient;
//const { ObjectId } = require ("mongodb");

class UserDAO { 
   
    constructor(url='nDB'){
        this.url = url,{useUnifiedTopology: true};
    }

    insert(data){
        return new Promise((resolve, reject) => {
            MongoClient.connect(this.url,(err,db) => {
                var dbo = db.db('site');
                dbo.collection('acc').insertOne(data,function(err, resp){
                    err ? reject(err) : resolve(resp);
                }); 
                db.close();
            });
        });
    }
}

module.exports = UserDAO;