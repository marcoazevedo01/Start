const PostDAO = require('../models/PostDAO');
const url = require('../../config/dbConnection');

class PainelControll {

    static routs() {
        return {
            authenticate: '/painel*',
            list: '/painel/:id',
            remove: '/painel/post/:id'
        };
    }

    list() {
        return function(req, resp) {
            const postDao = new PostDAO(url); 
            postDao.list()
                .then(postagens => resp.render('./painel',{postagens:postagens}))
                .catch(error => console.log(error)); 
        };
    }  

    insert(){
        return function(req, resp) {
            let date = new Date();
            let data = {
                'img':req.body.img,
                'title':req.body.title,
                'message':req.body.message,
                'date': `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`
            }
            const postDao = new PostDAO(url); 
            postDao.insert(data)
                .then(suss => resp.redirect('./painel'))
                .catch(error => console.log(error)); 
        }
    }

    edit(){
        return function(req, resp) {
            console.log(req.body);
        }
    }

    remove(){
        return function(req, resp) {
            let id = req.params.id;
            const postDao = new PostDAO(url); 
            postDao.delete(id)
                .then(suss => resp.redirect(`/painel/${req.user.clientId}`))
                .catch(error => console.log(error)); 
        }
    }
}

module.exports = PainelControll;