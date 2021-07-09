module.exports = (app, upload) => {
    const uploadController = require('../controller/uploadController');
    app.route('/upload')
        .post(upload.single('myFile'), uploadController.upload_file);
    app.route('/image/:imgId')
        .get(uploadController.get_an_image)
}