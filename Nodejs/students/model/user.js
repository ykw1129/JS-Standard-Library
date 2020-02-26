const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:2,
        maxlength:10
    },
    age:{
        type:Number,
        min:10,
        max:100
    },
    sex:{
        type:String
    },
    email:{
        type:String
    },
    hobbies:[String],
    collage:String,
    enterDate:{
        type:Date,
        default:Date.now
    }

})

const Student = mongoose.model('Student',studentSchema)

module.exports = Student