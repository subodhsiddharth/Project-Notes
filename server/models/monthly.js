const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const monthSchema = new Schema({
    year: {
        type: String,
        required: true,
        unique: true
    },
    month: {
        type: String,
        enum: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        required: true
    }
},{
    writeConcern: {
       w: 'majority',
       j: true,
       wtimeout: 1000
    }
 },{
    timestamps: true
})

var  SolvedMonthly = mongoose.model('MonthlyPS', monthSchema);

module.exports = CompileQuestions;