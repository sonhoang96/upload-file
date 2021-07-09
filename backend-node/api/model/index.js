const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let task = new Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    portrait: {
        type: Object,
        require: true
    }
})

module.exports = mongoose.model('INFOMATION', task)