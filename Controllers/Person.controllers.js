const contact = require("../models/Person");

exports.addPerson = async (req, res) => {
  try {
    const newPerson = new Person({ ...req.body })
   const response = await newPerson.save()
    res.send({ response, msg: "Person is saved" })
  } catch (error) {
    res.status(400).send({ msg: "can not save it" })
  }
};

exports.getAllPersons = async (req, res) => {
  try {
    const result = await Person.find();
    res.send({ result, msg: "getting contacts succ" });
  } catch (error) {
    res.status(400).send({ msg: " cannot get persons" });
  }
};

exports.getById = async (req, res) => {
  try {
    const result = await Person.findOne({ _id: req.params.id });
    res.send({ result, msg: "getting person succ" });
  } catch (error) {
    res.status(400).send({ msg: " there is no person with id " });
  }
};

exports.deleteById = async (req, res) => {
  try {
    const result = await Person.deleteOne({ _id: req.params.id });
    result.n
      ? res.send({ result, msg: " contact deleted" })
      : res.send("there is no contact to delete");
  } catch (error) {
    res.status(400).send({ msg: " cannot delete " });
  }
};

exports.updateById = async (req, res) => {
  try {
    const result = await Person.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    console.log(result);
    result.nModified
      ? res.send({ result, msg: " person updated" })
      : res.send({ msg: "already updated" });
  } catch (error) {
    res
      .status(400)
      .send({ msg: " there is no person with this id to update " });
  }
};