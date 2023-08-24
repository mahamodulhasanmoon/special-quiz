const express = require("express");

const specialQuizRouter = require("../modules/specialQuizes/specialQuiz.routes");
const router = express.Router();

router.use(specialQuizRouter);
// check health routes
router.get("/health", (_req, res) => {
  res.status(200).json({
    status: 200,
    message: "success",
  });
});

module.exports = router;
