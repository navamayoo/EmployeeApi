const express = require("express");
const bodyParser = require("body-parser");


//local import
const connectDb = require("./db.js");
const employeeRoutes = require('./controllers/employee.controller.js')

const app = express();
//middleware
app.use(bodyParser.json());
app.use(express.json());
app.use('/api/employees', employeeRoutes)

connectDb()
  .then(() => {
    console.log("db connection success");
    app.listen(3000, () => console.log("server started at 3000"));
  })
  .catch((err) => console.log(err));
