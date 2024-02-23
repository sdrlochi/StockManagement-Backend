const mongoose = require("mongoose");

// Define Category Schema
const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    default: "Add Category",
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String, // You might want to store the URL of the image
    required: true,
  },
});

// Create Category model
const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
