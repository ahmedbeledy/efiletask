const mongoose = require('mongoose')
const User = require('../models/user')

mongoose.connect('mongodb://127.0.0.1:27017/efiletask', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

