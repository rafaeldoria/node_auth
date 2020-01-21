const moongose = require('moongose')
require('mongoose-type-email')

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: moongose.SchemaTypes.Email,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

module.exports = mongoose.models('User', User)