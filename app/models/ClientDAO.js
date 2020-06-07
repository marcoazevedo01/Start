const MongoClient = require('mongodb').MongoClient;
//const { ObjectId } = require ("mongodb");

class ClientDAO { 
   
    constructor(url='nDB'){
        this.url = url,{useUnifiedTopology: true};
    }

    searchEmail(email){
        return new Promise((resolve, reject) => {
            MongoClient.connect(this.url,(err,db) => {
                var dbo = db.db('hclient');
                dbo.collection('client').findOne({'email':email},function(err, resp){
                    err ? reject(err) : resolve(resp);
                }); 
                db.close();
            });
        });
    }
}

module.exports = ClientDAO;