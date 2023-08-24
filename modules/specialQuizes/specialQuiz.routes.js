const {Router} = require("express");
// const app = require("./app");
const specialQuizRouter = Router();
// app.post("/api/special-quizzes", async (req, res) => {
//   try {
//     const specialQuizData = req.body;
//     const createdSpecialQuiz = await SpecialQuiz.create(specialQuizData);
//     res.status(201).json(createdSpecialQuiz);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({error: "Internal server error"});
//   }
// });
module.exports = specialQuizRouter;
