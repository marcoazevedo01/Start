const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => { //Cria um middleware onde todas as requests passam por ele 
    if (req.headers["x-forwarded-proto"] == "http") //Checa se o protocolo informado nos headers é HTTP 
        res.redirect(`https://${req.headers.host}${req.url}`); //Redireciona pra HTTPS 
    else //Se a requisição já é HTTPS 
        next(); //Não precisa redirecionar, passa para os próximos middlewares que servirão com o conteúdo desejado 
});

//app.use(upload.array());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/static', express.static('./app/public'));

app.set('view engine', 'ejs');
app.set('views', './app/views');

const sessionAltentication = require('./altentication');
sessionAltentication(app);

const routs = require('../app/routes/routs');
routs(app);

module.exports = app;