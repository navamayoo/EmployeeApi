const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;

const Employee = require("../models/employee.model.js");
const { generateCrudMethod } = require("../services");
const employeeCrud = generateCrudMethod(Employee);

router.get('/test',(req,res))

router.get("/", (req, res) => {
  employeeCrud.getAll()
    .then((data) => res.status(200).json(data))
    .catch((err) => console.log(err));
});

router.post("/", (req, res) => {
  employeeCrud.create(req.body)
    .then((data) => res.status(201).json(data))
    .catch((err) => console.log(err));
});

router.get("/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id) == false)
    res.status(400).json({
      error: "Given object id is not valid",
    });
  else
    employeeCrud.getById(req.params.id).then((data) => {
      if (data) res.status(200).json(data);
      else
        res.status(404).json({
          error: "No record with given _id: " + req.params.id,
        });
    });
});

// router.get('/', async(req, res)=>{
// try {
//     const employees = await Employee.find({})
//     res.status(200).json(employees);
// } catch (error) {
//         console.log(error.message);
//         res.status(500).json({ message: error.message });
// }

// })

router.put('/:id', (req, res)=>{})
router.delete("/:id", (req, res) => {});

module.exports = router;
