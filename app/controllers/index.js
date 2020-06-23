const PostDAO = require('../models/PostDAO');
const url = require('../../config/dbConnection');

class IndexControll {

    static routs() {
        return {
            home: '/',
            blog: '/blog'
        };
    }

    home() {
        return function(req, resp) {
            resp.render('./index',{postagens:postagens})  
        };
    }  

    blog() {
        return function(req, resp) {
            const postDao = new PostDAO(url); 
            postDao.list()
                .then(postagens => resp.render('./blog',{postagens:postagens}))
                .catch(error => console.log(error)); 
        };
    }

}

module.exports = IndexControll;