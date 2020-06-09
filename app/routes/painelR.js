const PainelControll = require('../controllers/painel');
const painelControll = new PainelControll();
const multer = require('../../config/upload');

module.exports = (app) => {
  const painelRouts = PainelControll.routs();

  app.use(painelRouts.authenticate, function (req, resp, next) {
    if (req.isAuthenticated()) {
      //app.locals.user = true; // <<<
      next();
    } else {
      //app.locals.user = false;
      resp.redirect('/login');
    }
  });

  app.route(painelRouts.list)
    .get(painelControll.list())
    //.post(multer.single('image'), painelControll.insert())
    .put(painelControll.edit())

  app.get(painelRouts.edit, painelControll.formEdit())
  app.get(painelRouts.remove, painelControll.remove())
    

};