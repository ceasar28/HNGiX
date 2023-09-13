const {
  createPerson,
  getPerson,
  updatePerson,
  deletePerson,
} = require("../services/service");

class PersonController {
  // create person controller
  async createPerson(req, res, next) {
    const { name } = req.body;
    // calling the createPerson services
    const newPerson = await createPerson(name);
    try {
      if (newPerson.success) {
        return res.status(201).send(newPerson);
      } else {
        return res.status(404).send(newPerson);
      }
    } catch (err) {
      return res.status(500).send(err);
    }
  }

  // read person controller
  async getPerson(req, res, next) {
    const { user_id } = req.params;

    const person = await getPerson(user_id);
    try {
      if (person.success) {
        return res.status(200).send(person);
      } else {
        return res.status(404).send(person);
      }
    } catch (err) {
      return res.status(500).send(err);
    }
  }

  // update person controller
  async updatePerson(req, res, next) {
    const data = {
      name: req.body.name,
      id: req.params.user_id,
    };

    const updatedPerson = await updatePerson;
    try {
      if (updatedPerson.success) {
        return res.status(205).send(updatePerson);
      } else {
        return res.status(404).send(updatedPerson);
      }
    } catch (err) {
      return res.status(500).send(err);
    }
  }

  // delete person
  async deletePerson(req, res, next) {
    const { user_id } = req.params;
    const deletedPerson = await deletePerson(user_id);
    try {
      if (deletedPerson.success) {
        return res.status(204).send(deletedPerson);
      } else {
        return res.status(404).send(deletedPerson);
      }
    } catch (err) {
      return res.status(500).send(err);
    }
  }
}

module.exports = new PersonController();
