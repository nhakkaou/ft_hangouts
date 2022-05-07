const mongoose = require("mongoose");
const Connection = () => {
  try {
    mongoose.connect(
      "mongodb+srv://helbouaz:thRr4I3JzbdI4ZUM@ms.mn6pb.mongodb.net/Otalent?retryWrites=true&w=majority",
      (err, client) => {
        if (err) throw err;
        else console.log("Connected to MongoDB");
      }
    );
  } catch (err) {
    throw err;
    process.exit(1);
  }
};

module.exports = Connection;
