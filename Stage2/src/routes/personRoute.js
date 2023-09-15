const express = require("express");
const router = express.Router();

const {
  createPerson,
  getPerson,
  getPeople,
  updatePerson,
  deletePerson,
} = require("../controllers/controller");

//@description: create a person
//@route: POST '/api'
router.post("/api", createPerson);

//@description: get person
//@route: GET '/api/:user_id'
router.get("/api/:user_id", getPerson);

//@description: get all person
//@route: GET '/api'
router.get("/api", getPeople);

//@description: update a person
//@route: POST '/api/:user_id'
router.put("/api/:user_id", updatePerson);

//@description: delete a person
//@route: POST '/api/:user_id'
router.delete("/api/:user_id", deletePerson);

module.exports = router;
