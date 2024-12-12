const mongoose = require('mongoose');

// Define the schema for the 'computer' collection
const computerSchema = new mongoose.Schema({
    name: String,  // Example field, add your fields here
    brand: String, // Example field
    specifications: String, // Example field
    price: Number, // Example field
    // Add other fields as per your data structure
});

// Create a model for the 'computer' collection
const Computer = mongoose.model('Computer', computerSchema, 'computer');

module.exports = Computer;
