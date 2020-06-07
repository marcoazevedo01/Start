const LoginControll = require('../controllers/login');
const loginControll = new LoginControll();
const ClientValit = require('../models/ClientValit');


module.exports = (app) => {
    const loginRouts = LoginControll.routs();

    app.route(loginRouts.login)
        .get(loginControll.formLogin())
        .post(ClientValit.validationsLogin(), loginControll.loginClient());
            
    app.get(loginRouts.logout, loginControll.logout());  

};