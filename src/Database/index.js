const mongoose = require("mongoose");

mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifieldTopology", true);

mongoose
  .connect("mongoose://localhost:27017/taskManagerBE")
  .then(() => {
    console.log("MongoDB online.");
  })
  .catch((erro) => {
    console.log("erro:", erro);
  });

const db = mongoose.connection;

module.export = db;
