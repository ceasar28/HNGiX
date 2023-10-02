const express = require("express");
const router = express.Router();
const { startRecord } = require("../controllers/recordController");
router.get("/", (req, res) => {
  console.log("Helloe");
});
router.post("/", startRecord);

module.exports = router;
