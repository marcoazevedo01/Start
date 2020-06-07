const PainelControll = require('../controllers/painel');
const painelControll = new PainelControll();

module.exports = (app) => {
    const painelRouts = PainelControll.routs();

    app.use(painelRouts.authenticate, function(req, resp, next){
        if(req.isAuthenticated()){
          //app.locals.user = true; // <<<
          next();
        }else{
          //app.locals.user = false;
          resp.redirect('/login');
        }
    });

    app.route(painelRouts.list)
        .get(painelControll.list())
        .post(painelControll.insert())
        .put(painelControll.edit()) 

    app.get(painelRouts.remove, painelControll.remove())

};