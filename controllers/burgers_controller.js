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
// CHECK OUT CALL BACKS AND ARGUMENTS PASSED IN FOR POST AND PUT (LIKE IN GET WITH GODFREY)
router.post("/api/burgers", function(req, res) {
    burger.insertOne("burger_name", "devoured", req.body.burger_name, 0, function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    let conditionVal = req.params.id;

    console.log("condition value", conditionVal);

    burger.updateOne("devoured", req.body.devoured, "id", conditionVal, function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          };
    });
});

module.exports = router;