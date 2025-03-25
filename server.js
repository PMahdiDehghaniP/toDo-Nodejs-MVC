//Connect To Mongo
require("./utils/mongoDataBase");
//End Connection
const adminRoutes = require("./routes/admin");
const setStatics = require("./utils/statics");
const { indexRouter } = require("./routes");
const { get404 } = require("./controllers/404controller");
const bodyParser = require("body-parser");
const express = require("express");
// const sequelize = require("./utils/mySQLdatabase");

const app = express();

//EJS
app.set("view engine", "ejs");
app.set("views", "views");
//endEJS

//Static Files
setStatics(app);
//endStatic Files

//Middlewares
app.use(bodyParser.urlencoded());
app.use(indexRouter);
app.use("/admin", adminRoutes);
//endMiddlewares

//404
app.use(get404);
//end404

//Connect to DB and Start Server
// sequelize.sync().then((result) => {
//   console.log(result);
//   app.listen(3000, () => console.log("Server is running on port 3000"));
// });

app.listen(3000, () => console.log("Server is running on port 3000"));
