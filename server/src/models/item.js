var mongoose = require("mongoose");

var itemSchema = new mongoose.Schema({
    name: String,
    price: String,
    image: String,
    description: String,
    category: String,
    dateBought: { type: Date, default:Date.now },
    dateFinish: { type: Date, default:Date.now },
});

module.exports = mongoose.model("Item", itemSchema);