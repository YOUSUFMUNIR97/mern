const mongoose = require('mongoose')
const Schema = mongoose.Schema;


let courseSchema = ({
    name: String,
})

const Course = mongoose.model('User', courseSchema)

module.exports = Course;