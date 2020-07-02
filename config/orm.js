const connection = require("./connection.js");

const orm = {

    selectAll: function(table, burgerCb) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            console.log(result);
            burgerCb(result);
        });
        // Note: This is the end point! This is where the database is queried.
        // THIS IS WHERE THE PROBLEM WAS; DIDNT HAVE burgerCb in line 5 and 10; DO THIS FOR OTHER TWO FUNCTIONS!
    },
    insertOne: function(table, col1ToInsert, col2ToInsert, val1ToInsert, val2ToInsert, burgerCb) {
        let queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
        connection.query(queryString, [table, col1ToInsert, col2ToInsert, val1ToInsert, val2ToInsert], function(err, result) {
            if (err) throw err;
            console.log(result);
            burgerCb(result);
        });
    },
    updateOne: function(table, updatedCol, updatedVal, conditionCol, conditionVal, burgerCb) {
        let queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [table, updatedCol, updatedVal, conditionCol, conditionVal], function(err, result) {
            if (err) throw err;
            console.log(result);
            burgerCb(result);
        });
    }
};

module.exports = orm;