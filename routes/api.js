const router = require("express").Router();
const Pokemon = require("../models/dexSchema");

//CREATE POKEMON
//POST REQ
router.post("/api/pokemon", ({ body }, res) => {
  Pokemon.create(body)
    .then((dbPokemon) => {
      res.json(dbPokemon);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

//DELETE POKEMON
//DELETE
router.delete("/delete/:id", (req, res) => {
  db.Pokemon.remove(
    {
      _id: mongojs.ObjectID(req.params.id),
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

//UPDATE POKEMON
//POST REQ
router.post("update/:id", (req, res) => {
  db.Pokemon.update(
    {
      _id: mongojs.ObjectID(req.params.id),
    },
    {
      $set: {
        firstNum: req.body.firstNum,
        secondNum: req.body.secondNum,
        thirdNum: req.body.thirdNum,
        fourthNum: req.body.fourthNum,
        fifthNum: req.body.fifthNum,
        sixthNum: req.body.sixthNum,
        seventhNum: req.body.firstNum,
        eighthNum: req.body.eighthNum,
        ninthNum: req.body.ninthNum,
      },
    },
    (error, edited) => {
      if (error) {
        console.log(error);
        res.send(error);
      } else {
        console.log(edited);
        res.send(edited);
      }
    }
  );
});

//FETCH POKEMON
//GET
