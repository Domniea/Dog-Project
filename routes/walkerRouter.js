const express = require("express");
const Walker = require("../models/person");
const walkerRouter = express.Router();

//GET All
walkerRouter.get("/", (req, res, next) => {
  Walker.find((err, allData) => {
    if (err) {
      res.sendStatus(500);
      return next(err);
    }
    return res.status(200).send(allData);
  });
});

//GET One
walkerRouter.get("/:walkerId", (req, res, next) => {
  Walker.find({ _id: req.params.walkerId }, (err, walker) => {
    if (err) {
      res.sendStatus(500);
      return next(200);
    }
    return res.status(200).send(walker);
  });
});

//POST
walkerRouter.post("/", (req, res, next) => {
  const newWalker = new Walker(req.body);
  newWalker.save((err, data) => {
    if (err) {
      res.sendStatus(500);
      return next(err);
    }
    return res.status(200).send(data);
  });
});

//UPDATE
walkerRouter.put("/:walkerId", (req, res, next) => {
  Walker.findOneAndUpdate(
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
walkerRouter.delete("/:walkerId", (req, res, next) => {
  Walker.findByIdAndDelete({ _id: req.params.walkerId }, (err, walker) => {
    if (err) {
      res.sendStatus(500);
      return next(err);
    }
    return res.status(200).send(`Successfully DELETED`);
  });
});

module.exports = walkerRouter;
