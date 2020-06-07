const {check} = require('express-validator');

class ClientValit{
    static validationsLogin(){
        return [
            check('email').isEmail().withMessage('Digite um Email valido'),
            check('password').notEmpty().withMessage('O campo senha nao pode estar vazio')
        ];
    } 
}

module.exports = ClientValit;