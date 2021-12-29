const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionCompilerSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    sampleInput: {
        type: String,
        required: true
    },
    sampleOutput: {
        type: Array,
        required: true
    },
    difficulty: {
        type: String,
        enum: ['Easy', 'Medium', 'Hard'],
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

var  CompileQuestions = mongoose.model('Question', questionCompilerSchema);

module.exports = CompileQuestions;