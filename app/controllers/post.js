const PostDAO = require('../models/PostDAO');
const url = require('../../config/dbConnection');

class PostControll {

    static routs() {
        return {
            postagem: '/post/:id'
        };
    }

    postagem() {
        return function(req, resp) {
            let id = req.params.id;
            const postDao = new PostDAO(url); 
            postDao.searchId(id)
                .then(postagem => resp.render('./post',{postagem:postagem}))
                .catch(error => console.log(error)); 
        };
    }  
    

}

module.exports = PostControll;