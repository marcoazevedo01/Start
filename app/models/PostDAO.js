const MongoClient = require('mongodb').MongoClient;
const { ObjectId } = require ("mongodb");

class PostDAO { 
   
    constructor(url='nDB'){
        this.url = url,{useUnifiedTopology: true};
    }

    list(){
        return new Promise((resolve, reject) => {
            MongoClient.connect(this.url,(err,db) => {
                var dbo = db.db('hclient');
                dbo.collection('post').find({}).toArray(function(err, resp){
                    err ? reject(err) : resolve(resp);
                }); 
                db.close();
            });
        });
    }


    insert(data){
        return new Promise((resolve, reject) => {
            MongoClient.connect(this.url,(err,db) => {
                var dbo = db.db('hclient');
                dbo.collection('post').insertOne(data,function(err, resp){
                    err ? reject(err) : resolve(resp);
                }); 
                db.close();
            });
        });
    }

    edit(data){
        return new Promise((resolve, reject) => {
            MongoClient.connect(this.url,(err,db) => {
                var dbo = db.db('hclient');
                dbo.collection('post').updateOne(data,function(err, resp){
                    err ? reject(err) : resolve(resp);
                }); 
                db.close();
            });
        });
    }

    delete(id){
        return new Promise((resolve, reject) => {
            MongoClient.connect(this.url,(err,db) => {
                var dbo = db.db('hclient');
                dbo.collection('post').deleteOne({'_id':ObjectId(id)},function(err, resp){
                    err ? reject(err) : resolve(resp);
                }); 
                db.close();
            });
        });
    }
}

module.exports = PostDAO;