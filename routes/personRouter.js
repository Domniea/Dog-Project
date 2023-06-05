const express = require("express");
const Person = require("../models/person");
const personRouter = express.Router();

//GET All
personRouter.get("/", (req, res, next) => {
  Person.find((err, allData) => {
    if (err) {
      res.sendStatus(500);
      return next(err);
    }
    return res.status(200).send(allData);
  });
});

//GET One
personRouter.get("/:walkerId", (req, res, next) => {
  Person.find({ _id: req.params.walkerId }, (err, walker) => {
    if (err) {
      res.sendStatus(500);
      return next(200);
    }
    return res.status(200).send(walker);
  });
});

//POST
personRouter.post("/", (req, res, next) => {
  const newWalker = new Person(req.body);
  newWalker.save((err, data) => {
    if (err) {
      res.sendStatus(500);
      return next(err);
    }
    return res.status(200).send(data);
  });
});

//UPDATE
personRouter.put("/:walkerId", (req, res, next) => {
  Person.findOneAndUpdate(
    { _id: req.params.walkerId },
    req.body,
    { new: true },
    (err, update) => {
      if (err) {
        res.sendStatus(500);
        return next(err);
      }
      return res.status(200).send(update);
    }
  );
});

//DELETE
personRouter.delete("/:walkerId", (req, res, next) => {
  Person.findByIdAndDelete({ _id: req.params.walkerId }, (err, walker) => {
    if (err) {
      res.sendStatus(500);
      return next(err);
    }
    return res.status(200).send(`Successfully DELETED`);
  });
});

module.exports = personRouter;
