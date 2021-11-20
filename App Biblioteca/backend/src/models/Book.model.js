const mongoose = require('mongoose');
const schema = mongoose.Schema;

var bookSchema = new schema({
    name: {
        type: String
    },
    author: {
        type: String
    },
    year: {
        type: Number
    },
    available: {
        type: Boolean,
        default: true
    },
    assign:{
        type:String
    }
},{
    collection: 'Books'
});

module.exports = mongoose.model('Book', bookSchema);