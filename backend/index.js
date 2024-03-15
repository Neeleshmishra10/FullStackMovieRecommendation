// Import required modules
const express = require('express');

// Create an instance of Express
const app = express();
const port = 8000; // You can set your desired port number here

// Define a route for '/'
app.get('/', (req, res) => {
    res.send('Hello');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
