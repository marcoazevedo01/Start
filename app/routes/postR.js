const PostControll = require('../controllers/post');
const postControll = new PostControll();

module.exports = (app) => {
    const postRouts = PostControll.routs();
        app.get(postRouts.postagem, postControll.postagem());

};