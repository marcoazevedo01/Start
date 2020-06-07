const indexRouts = require('./index');
const loginRouts = require('./loginR');
const painelRouts = require('./painelR');
const postRouts = require('./postR');

module.exports = (app) => {
    indexRouts(app);
    loginRouts(app);
    painelRouts(app);
    postRouts(app);
};