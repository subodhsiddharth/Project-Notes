const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reportSchema = new Schema({
    qid: {
        type: Number,
        required: true,
        unique: true
    },
    qtitle: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Solved", "Partially Solved", "Unsolved"],
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