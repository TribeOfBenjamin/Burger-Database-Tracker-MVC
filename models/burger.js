const orm = require("../config/orm.js");

let burger = {

    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        })
    },

    insertOne: function(col, val, cb) {
        orm.insertOne("burgers", col, val, function(res) {
            cb(res);
        })
    },

    updateOne: function(upCol, upVal, condCol, condVal, cb) {
        orm.updateOne("burgers", upCol, upVal, condCol, condVal, function(res) {
            cb(res);
        })
    }
};

module.exports = burger;

// For insert I only have the burger name; devoured truthy statement NOT included;