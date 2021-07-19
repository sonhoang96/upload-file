var fs = require('fs')
const INFO = require('../model/index')
exports.upload_file = async (req, res, next) => {
    if (!req.file) {
        //Nếu không có file gửi tới thì sẽ báo lỗi
        const error = new Error('Lỗi xảy ra');
        error.httpStatusCode = 400;
        return next(error);
    } else {
        //Đọc đường dẫn của file
        const img = fs.readFileSync(req.file.path);
        //Mã hóa dạng base6
        const encode_image = img.toString('base64');
        const data = req.body;
        //Tạo lưu trữ ảnh dưới dạng nhị phân
        const finalImage = {
            contentType: req.file.mimeType,
            image: new Buffer.from(encode_image, 'base64')
        }
        //Tạo data mới theo model
        const newInfo = new INFO({
            name: data.name,
            age: data.age,
            portrait: finalImage
        });
        //Lưu data
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