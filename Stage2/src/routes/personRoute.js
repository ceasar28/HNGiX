/**
 * @swagger
 * components:
 *  schemas:
 *   Person:
 *     type: object
 *     required:
 *       - name
 *     properties:
 *      id:
 *         type: string
 *         description: databases generated id of the person
 *      name:
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

/**
 * @swagger
 * /api:
 *   post:
 *     summary: Create a new person
 *     description: Create a new person with the provided information.
 *     tags: [People]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Person' // Reference to your Person schema definition
 *     responses:
 *       201:
 *         description: Successfully created a new person.
 *       400:
 *         description: Invalid request data.
 *       500:
 *         description: Internal server error.
 */

//@description: create a person
//@route: POST '/api'
router.post("/api", createPerson);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 */

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
