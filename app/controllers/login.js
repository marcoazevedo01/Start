const {validationResult} = require('express-validator');

class LoginControll {

    static routs() {
        return {
            login: '/login',
            logout: '/logout'
        };
    }

    formLogin(){
        return function(req, resp) {
            resp.render('./login',{error:null})
        };    
    }
    loginClient(){
        return function(req, resp, next) {
            const passport = req.passport;
            const error = validationResult(req);
            if(!error.isEmpty()){
                return resp.render('./login',{error: error.array()});
            }    
            passport.authenticate('local', (error, user, info) => {
                if (info) {return resp.render('./login',{info: info, error:null});
                }
                req.login(user, (error) => {
                    if (error) {
                        return next(error);
                    }
               
                    return resp.redirect(`/painel/${user._id}`);
                });
            })(req, resp, next);
        };
    }

    logout() {
        return function(req, resp) {
            req.logout();
            //resp.app.locals.user = false;
            resp.redirect('/login');
        };
    }  
}

module.exports = LoginControll;