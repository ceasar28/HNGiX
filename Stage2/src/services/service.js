const Person = require("../models/Model");

class PersonServices {
  // create Person
  async createPerson(data) {
    const name = data.name;
    try {
      if (!name || typeof name !== "string") {
        const error = new Error(`Missing "name" field`);

        return { error: error };
      } else {
        const person = new Person({ name });
        const saved = await person.save();
        if (saved) {
          return { success: "user saved succefull", data: saved };
        }
      }
    } catch (err) {
      return { error: err.message };
    }
  }
}
