module.exports = (error, req, res, next) => {
  console.log("Error Handler");
  next();
};
