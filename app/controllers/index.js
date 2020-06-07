const PostDAO = require('../models/PostDAO');
const url = require('../../config/dbConnection');

class IndexControll {

    static routs() {
        return {
            home: '/'
        };
    }

    home() {
        return function(req, resp) {
            const postDao = new PostDAO(url); 
            postDao.list()
                .then(postagens => resp.render('./index',{postagens:postagens}))
                .catch(error => console.log(error)); 
        };
    }  

}

module.exports = IndexControll;