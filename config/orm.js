const connection = require("./connection.js");

const orm = {

    selectAll: function(table, burgerCb) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            console.log(result);
            burgerCb(result);
        });
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
      console.log(table,updatedCol,updatedVal,conditionCol, conditionVal)
        connection.query(queryString, [table, updatedCol, updatedVal, conditionCol, conditionVal], function(err, result) {
            if (err) throw err;
            console.log(result);
            burgerCb(result);
        });
    }
};

module.exports = orm;