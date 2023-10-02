let data = [];

class RecordServices {
  //start a record and return an ide for the session
  async startRecord(blob) {
    try {
      if (blob !== null) {
        // blob = Buffer.from(blob, "base64").toString("binary");
        data.push(blob);
        return data.slice(-1);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new RecordServices();
