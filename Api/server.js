const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;
const Morgan = require("morgan");
const cors = require("cors");
const UserRoutes = require("./Controllers/User");
const Middleware = require("./Middleware");
const ErrorHandler = require("./Middleware/errorHandler");
const dbConnection = require("./Config/db");
app.use(Morgan("dev"));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Middleware);
app.use("/", UserRoutes);
app.use(ErrorHandler);
dbConnection();
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
