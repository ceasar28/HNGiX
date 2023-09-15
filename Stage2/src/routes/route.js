/**
 * @swagger
 * components:
 *  schemas:
 *   Person:
 *     type: object
 *     required:
 *       - name
 *     properties:
 *       id:
 *         type: string
 *         description: databases generated id of the person
 *       name:
 *         type: string
 *         description: name of the person
 *     example:
 *       id: d5fE_asD
 *       name: mark Essein
 *
 */

const express = require("express");
const router = express.Router();

const {
  createPerson,
  getPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/controller");

//@description: create a person
//@route: POST '/api'

router.post("/api", createPerson);

//@description: get person
//@route: GET '/api/:user_id'
router.get("/api/:user_id", getPerson);

//@description: update a person
//@route: POST '/api/:user_id'
router.put("/api/:user_id", updatePerson);

//@description: delete a person
//@route: POST '/api/:user_id'

router.delete("/api/:user_id", deletePerson);

module.exports = router;
