const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/", (req, res, next) => {
  try {
    console.log(req.body);
    if (req.body.name) return res.send("Hello World!");
    throw "No name";
  } catch (err) {
    next(err);
  }
});

module.exports = router;
