const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;

//Connect to Mongodb
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Mongodb connected!"))
  .catch(err => console.log(err));