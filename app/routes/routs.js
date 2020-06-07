const indexRouts = require('./index');
const loginRouts = require('./loginR');
const painelRouts = require('./painelR');

module.exports = (app) => {
    indexRouts(app);
    loginRouts(app);
    painelRouts(app);
};