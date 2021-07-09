var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  multer = require('multer'),
  cors = require('cors');

app.use(cors({}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const STORAGE = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    console.log(file)
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: STORAGE })

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/image',
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => {
    console.log("Connected !!!")
  }).catch(err => {
    console.log(err);
  });

var routes = require('./api/route/index');
var uploadRoutes = require('./api/route/uploads')
uploadRoutes(app, upload)
routes(app);

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log('Server started on: ' + port);
