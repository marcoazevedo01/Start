
const url = require('../../config/dbConnection');

class IndexControll {

    static routs() {
        return {
            home: '/'
        };
    }

    home() {
        return function(req, resp) {
            resp.render('./index')  
        };
    }  

}

module.exports = IndexControll;