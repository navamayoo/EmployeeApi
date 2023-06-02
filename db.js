const mongoose = require("mongoose");

const dbUri =
  "mongodb+srv://navamayoo:9Br94L5k2ieZUpys@employee.xdwbcp0.mongodb.net/employee_db?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);
module.exports = () => {
  return mongoose.connect(dbUri);
};
