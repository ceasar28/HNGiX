const { startRecord } = require("../services/recordService");

class RecordController {
  async startRecord(req, res, next) {
    const chunk = req.body.chunk;
    // console.log(chunk);
    try {
      const blob = await startRecord(chunk);
      if (blob) {
        console.log(blob[0]);
        return res.status(200).json({ success: blob[0] });
      }
      console.log("err");
    } catch (error) {
      console.log("error");
    }
  }
}

module.exports = new RecordController();
