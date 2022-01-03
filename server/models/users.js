const { timeStamp } = require('console');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    admin:   {
        type: Boolean,
        default: false
    }
    
}, {
    writeConcern: {
       w: 'majority',
       j: true,
       wtimeout: 1000
    }
 }, {
    timestamps: true
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);