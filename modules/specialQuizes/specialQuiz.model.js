const { Schema, model } = require('mongoose')


const specialQuizSchema = Schema(
    {
        title: String,
        description: String,
        thumbnail: String,
        price: Number,
        availabilityFrom: Date,
        availabilityTo: Date,
        sector: String,
        enrolledBy: Array,
        duration: Number,
        studentsMark:{
            type:Schema.Types.ObjectId,
            ref:'StudentsMark'
        },
        questions:{
            type:Schema.Types.ObjectId,
            ref:'Questions'
        }
        
    },
    {
        timestamps: true
    }
);

module.exports.SpecialQuiz = model('SpecialQuiz', specialQuizSchema);

const studentMarksSchema = Schema(
    {
        student: String,
        quizId: String,
        totalSpentTime: Number,
    },
    {
        timestamps: true,
    }
);
module.exports.StudentsMark = model('StudentsMark', studentMarksSchema);

const questionsSchema = new Schema(
    {

        question: String,
        answers: String,
       
        opitons: Array,
        explanations: String,
    },
    {
        timestamps: true
    }
);

module.exports.StudentsMark = model('Questions', questionsSchema);


