const connection = require("./connection.js");

const orm = {

    selectAll: function(table) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(table, col1ToInsert, col2ToInsert, val1ToInsert, val2ToInsert) {
        let queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
        connection.query(queryString, [table, col1ToInsert, col2ToInsert, val1ToInsert, val2ToInsert], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(table, updatedCol, updatedVal, conditionCol, conditionVal) {
        let queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [table, updatedCol, updatedVal, conditionCol, conditionVal], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;