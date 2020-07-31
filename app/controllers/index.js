
const url = require('../../config/dbConnection');
const request = require('request');
const UserDAO = require('../models/UserDAO');

class IndexControll {

    static routs() {
        return {
            home: '/'
        };
    }

    home() {
        return function(req, resp) {
            let ip = req.headers['x-forwarded-for'];
            let site = `http://ip-api.com/json/${ip}`;
            request(site,function (err, response, body){
                if(!err){
                    let obj = {
                        ip : ip,
                        resp :JSON.parse(body),
                        date : new Date()
                    }
                    const userDao = new UserDAO(url);
                    userDao.insert(obj)
                        .then(suss => resp.render('./index') )
                        .catch(error => console.log(error));
                }
            })
        };
    }  

}

module.exports = IndexControll;