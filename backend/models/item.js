const mongoose = require("mongoose");

// Define Item Schema
const itemSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
  },
  pricePerUnit: {
    type: Number,
    required: true,
  },
  orderedAt: {
    type: Date,
    default: Date.now,
  },
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Supplier",
    required: true,
  },
});

// Create Item model
const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
