//const uuid = require('uuid/v4');
const sessionn = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const ClientDao = require('../app/models/ClientDAO');
const url = require('./dbConnection');

module.exports = (app) => { 
    passport.use(new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        (email, password, done) => {
            const clientDao = new ClientDao(url);
            clientDao.searchEmail(email)
                .then(user => {
                    if (!user || password != user.password) {
                        return done(null, false, {
                            info: 'Email ou senha incorretos!'
                        });
                    }
                    if(user.status)return done(null, user);
                    return done(null,false,{info:'Client desativado'})
                })
                .catch(error => done(error, false));
        }
    ));

    passport.serializeUser((user, done) => {
        const usersessionn = {
            clientId: user._id,
            email: user.email
        };
        done(null, usersessionn);
    });

    passport.deserializeUser((usersessionn, done) => {
        done(null, usersessionn);
    });

    app.use(sessionn({
        secret: 'node string',
        //genid: function(req) {
       // //   return uuid();
       // },
        resave: false,
        saveUninitialized: false
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(function (req, resp, next) {
        req.passport = passport;
        next();
    });
}
