const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`"Connected To MongoDB" \n `))
  .catch((error) => console.log(error));
