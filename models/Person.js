const mongoose = require('mongoose')

const schema = mongoose.Schema

const personSchema= new schema({

    name : {
        type:String ,
        required:true
    },

favoriteFoods : [String],
age : Number
})

module.exports = Person = mongoose.model('person',personSchema)