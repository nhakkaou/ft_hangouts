module.exports = (error, req, res, next) => {
  console.log("Error Handler", error);
  res.status(400).send("Error Handler");
};
