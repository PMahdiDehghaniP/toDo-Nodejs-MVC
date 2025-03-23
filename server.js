const express = require("express");
const bodyParser = require("body-parser");
const setStatics = require("./utils/statics");
const app = express();
const adminRoutes = require("./routes/admin");
const { indexRouter } = require("./routes");
const { get404 } = require("./controllers/404controller");

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

app.listen(3000, () => console.log("Server is running on port 3000"));
