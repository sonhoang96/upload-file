module.exports = (app) => {
    const controller = require('../controller')
    app.route('/image')
        .post(controller.upload_image)
    // ROUTES
    app.route('/')
        .get(controller.get_link)
}