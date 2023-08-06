const { default: mongoose } = require("mongoose");

let mongoURL =
  "mongodb+srv://dbUser:5309_Efgh@cluster0.oxjg3se.mongodb.net/mem-rooms";

mongoose.connect(mongoURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

let connection = mongoose.connection;

connection.on("error", () => {
  console.log("Mongo DB Connection failed");
});

connection.on("connected", () => {
  console.log("Mongo DB Connection Successful");
});

module.exports = mongoose;
