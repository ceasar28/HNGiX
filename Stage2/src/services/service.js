const Person = require("../models/Model");

class PersonServices {
  // create Person
  async createPerson(data) {
    const name = data.name;
    try {
      if (!name || typeof name !== "string") {
        const error = new Error(
          `Missing "name" field or wrong data type(must be a string)`
        );

        return { error: error.message };
      } else {
        const person = new Person({ name });
        const saved = await person.save();
        if (saved) {
          return { success: "user saved successfull", data: saved };
        }
      }
    } catch (err) {
      return { error: err.message };
    }
  }

  // read person
  async getPerson(id) {
    try {
      const fetch = await Person.findById(id);
      if (!fetch) {
        const error = new Error("Person not found");
        return { error: error.message };
      } else {
        return { success: "Person found", data: fetch };
      }
    } catch (err) {
      // Check if the error is a CastError (invalid ID)
      if (err.name === "CastError") {
        return { error: "Invalid id" };
      }
      return { error: "Server failed to fetch user. Try again..." };
    }
  }

  // to get all people
  async getPeople() {
    try {
      const people = await Person.find({}).lean();
      if (!people) {
        const error = new Error("NO data fetched");
        return { error: error.mesage };
      } else {
        return { success: "All data fetched", data: people };
      }
    } catch (err) {
      return { error: err.message };
    }
  }

  // update person
  async updatePerson(data) {
    console.log("service", data);
    const name = data.name;
    const id = data.id;
    try {
      const updatedUser = await Person.findByIdAndUpdate(
        id,
        { name },
        { new: true }
      );
      if (!updatedUser) {
        const error = new Error("Person not found");
        return { error: error.message };
      } else {
        return { success: "Person Updated Successfully", data: updatedUser };
      }
    } catch (err) {
      // Check if the error is a CastError (invalid ID)
      if (err.name === "CastError") {
        return { error: "Invalid id" };
      }
      return { error: "failed to Update person. Try again..." };
    }
  }

  // delete person
  // read person
  async deletePerson(id) {
    try {
      const deletedPerson = await Person.findByIdAndDelete(id);
      if (deletedPerson) {
        return { success: "Person Deleted successfully", data: deletedPerson };
      } else {
        const error = new Error("Person not found");
        return { error: error.message };
      }
    } catch (err) {
      // Check if the error is a CastError (invalid ID)
      if (err.name === "CastError") {
        return { error: "Invalid id" };
      }
      return { error: " failed to delete user. Try again..." };
    }
  }
}

module.exports = new PersonServices();
