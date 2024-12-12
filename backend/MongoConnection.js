const mongoose = require('mongoose');

// MongoDB connection function
const connectToMongoDB = async () => {
    try {
        // Replace 'your_connection_string' with your MongoDB URI
        const uri = 'mongodb://localhost:27017/mindmaze'; // For local MongoDB
        // const uri = 'your_atlas_connection_string'; // For MongoDB Atlas

        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB successfully!');
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1); // Exit process on failure
    }
};

module.exports = connectToMongoDB;
