const mongoose = require('mongoose');

if(!mongoose.connection.db){
    mongoose.connect('mongodb://localhost:27017/CS591SA1');
}

const Schema = mongoose.Schema;
const length = new Schema({
    name: String,
    length: String
})

const len = mongoose.model('len', length);

module.exports = len;