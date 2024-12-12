const Computer = require('../model/computer');  // Import the Computer model


// API to fetch all computer data from the 'computer' collection
const ComputerRouter = (req, res) => {
    try {
        // Fetch all documents from the 'computer' collection
        const computers = Computer.find();
        
        if (computers.length === 0) {
            return res.status(404).json({ message: 'No data found' });
        }

        // Send the fetched data as a response
        res.status(200).json(computers);
    } catch (error) {
        console.error('Error fetching computer data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = ComputerRouter;
