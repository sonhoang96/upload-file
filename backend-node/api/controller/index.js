
exports.upload_image = (req, res, body) => {
    console.log(req.body, body, req.files)
    res.json({
        content: 'okkk'
    })
}

exports.get_link = (req, res) => {
    res.sendFile(__dirname + '/index.html');
}