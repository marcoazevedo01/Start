const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => { 
    if (req.headers["x-forwarded-proto"] == "http") 
        res.redirect(`https://${req.headers.host}${req.url}`);
    else 
        next(); 
});


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