const mongoose = require("mongoose");

module.exports.connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://admin:Sameer1213@skbashaop.34p1wfy.mongodb.net/devTinder"
  );
};

// module.exports = connectDb