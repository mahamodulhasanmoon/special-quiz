import mongoose from "mongoose";

const specialQuizSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    thumbnail: String,
    price: Number,
    availabilityFrom: Date,
    availabilityTo: Date,
    sector: String,
  },
  {timestamps: true}
);

const studentMarksSchema = new mongoose.Schema(
  {
    student: String,
    quizId: String,
    totalSpentTime: Number,
  },
  {
    timestamps: true,
  }
);

const questionsSchema = new mongoose.Schema(
  {
    questions: [{}],
    question: String,
    answers: String,
    duration: Number,
    opitons: [{}],
    explanations: String,
  },
  {timestamps: true}
);

export default mongoose.model(
  "SpecialQuiz",
  specialQuizSchema,
  "studentMarks",
  studentMarksSchema,
  "questions",
  questionsSchema
);
