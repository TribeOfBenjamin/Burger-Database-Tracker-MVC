const orm = require("../config/orm.js");

const burger = {

    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        })
    },

    insertOne: function(col1, col2, val1, val2, cb) {
        orm.insertOne("burgers", col1, col2, val1, val2, function(res) {
            cb(res);
        })
    },

    updateOne: function(upCol, upVal, condCol, condVal, cb) {
        console.log(upVal);
        orm.updateOne("burgers", upCol, upVal, condCol, condVal, function(res) {
            cb(res);
        })
    }
};

module.exports = burger;