const mongoose = require("mongoose");

// Define Supplier Schema
const supplierSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures email is unique
    lowercase: true, // Converts email to lowercase before saving
    // Validate email format
    validate: {
      validator: function (v) {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
});

// Create Supplier model
const Supplier = mongoose.model("Supplier", supplierSchema);

module.exports = Supplier;
