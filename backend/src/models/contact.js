const mongoose = require('mongoose')
const validator = require('validator')

const ContactSchema = new mongoose.Schema({
    Notes: {
        type: String,
        required: true,
        trim: true
    },
    Name: {
        type: String,
        required: true,
        trim: true
    },
    Phone: {
        type: String,
        required: true,
        trim: true
        , validate(value) {
            if (!validator.isMobilePhone(value)) {
                throw new Error('Phone is invalid');
            }
        }
    },
    Address: {
        type: String,
        required: true,
        trim: true
    },


})

const Contact = mongoose.model('Contact', ContactSchema)

module.exports = Contact
