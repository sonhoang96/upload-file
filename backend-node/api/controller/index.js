
exports.upload_image = (req, res, body) => {
    console.log(req.body, body, req.files)
    res.json({
        content: 'okkk'
    })
}

//link tới file html để test api
exports.get_link = (req, res) => {
    res.sendFile(__dirname + '/index.html');
}