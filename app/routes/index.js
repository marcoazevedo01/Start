const IndexControll = require('../controllers/index');
const indexControll = new IndexControll();

module.exports = (app) => {
    const indexRouts = IndexControll.routs();
        app.get(indexRouts.home, indexControll.home());


};