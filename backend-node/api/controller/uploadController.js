var fs = require('fs')
const INFO = require('../model/index')
exports.upload_file = async (req, res, next) => {
    // console.log(req.file)
    if (!req.file) {
        const error = new Error('Lỗi xảy ra');
        error.httpStatusCode = 400;
        return next(error);
    } else {
        const img = fs.readFileSync(req.file.path);
        const encode_image = img.toString('base64');
        const data = req.body;
        const finalImage = {
            contentType: req.file.mimeType,
            image: new Buffer.from(encode_image, 'base64')
        }
        const newInfo = new INFO({
            name: data.name,
            age: data.age,
            portrait: finalImage
        });
        const saveInfo = await newInfo.save();
        res.send(saveInfo)
    }
}
exports.get_an_image = async (req, res) => {
    try {
        const id = req.params.imgId;
        const result = await INFO.findById(id);
        res.contentType('image/jpeg')
        res.send(result.portrait.image.buffer)
    } catch (error) {
        res.send(error)
    }
}