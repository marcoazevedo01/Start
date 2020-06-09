const PostDAO = require('../models/PostDAO');
const url = require('../../config/dbConnection');
const filehelper = require('../../config/fileHelper');

class PainelControll {

    static routs() {
        return {
            authenticate: '/painel*',
            list: '/painel/client/:id',
            post: '/painel/post/list/:id',
            remove: '/painel/post/remove/:id'
        };
    }

    list() {
        return function(req, resp, next) {
            const postDao = new PostDAO(url); 
            postDao.list()
                .then(postagens => resp.render('./painel',{postagens:postagens, dados:{}}))
                .catch(error => console.log(error)); 
        };
    }  

    insert(){
        return function(req, resp) {
            console.log('no insert');
            const postDao = new PostDAO(url); 
            if(req.file){
                filehelper.compressImage(req.file, 350)
                    .then(newPath => montObj())
                    .then(obj => postDao.insert(obj))   
                    .then(suss => resp.redirect(`/painel/client/${req.user.clientId}`))   
                    .catch(err => console.log(err) );

            }else{
                 return resp.redirect(`/painel/client/${req.user.clientId}`);
            }

            function montObj(){
                let date = new Date();
                let data = {
                    'img':req.file.filename.split('.')[0] + '.webp',
                    'title':req.body.title,
                    'message':req.body.message,
                    'date': `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`
                }
                return data;
            }
        }
    }

    formEdit(){
        return function(req, resp) {
            console.log('editt');
            let id = req.params.id;
            const postDao = new PostDAO(url); 
            postDao.searchId(id)
                .then(dados => resp.json(dados))
                .catch(error => console.log(error))
            
        }
    }

    edit(){
        return function(req, resp) {
            console.log('entrou no edit');
            let id = req.body;
            console.log(id);
            const postDao = new PostDAO(url); 
            if(req.file){
                
              

            }else{
                 return resp.redirect(`/painel/client/${req.user.clientId}`)
            }

            function montObj(){
                let date = new Date();
                let data = {
                    'img':req.file.filename.split('.')[0] + '.webp',
                    'title':req.body.title,
                    'message':req.body.message,
                    'date': `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`
                }
                return data;
            }
        }
    }

    remove(){
        return function(req, resp) {
            let id = req.params.id;
            const postDao = new PostDAO(url); 
            postDao.delete(id)
                .then(suss => resp.redirect(`/painel/client/${req.user.clientId}`))
                .catch(error => console.log(error)); 
        }
    }
}

module.exports = PainelControll;