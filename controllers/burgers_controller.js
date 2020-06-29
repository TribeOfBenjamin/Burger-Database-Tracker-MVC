const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burgers.insertOne("burger_name", req.body.burger_name, function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    let conditionVal = req.params.id;

    console.log("condition value", conditionVal);

    burgers.updateOne("burger_name", req.body.burger_name, "id", conditionVal, function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          };
    });
});

module.exports = router;

// For insert I only have the burger name; devoured truthy statement NOT included;
// USE ARRAYS (LIKE IN CATS.JS) IF ADD DEVOURED!