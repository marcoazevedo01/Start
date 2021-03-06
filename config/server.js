const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use((req, resp, next) => { 
    const url = req.headers["x-forwarded-proto"];
    if (((url == "http")||(url == "www")||(url == "https://www"))) {
      resp.redirect(`https://${req.headers.host}`);  
    }else{
      next(); 
    } 
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/static', express.static('./app/public'));

app.set('view engine', 'ejs');
app.set('views', './app/views');

const routs = require('../app/routes/routs');
routs(app);

module.exports = app;