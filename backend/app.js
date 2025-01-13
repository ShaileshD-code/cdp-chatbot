const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import cors
const { searchDocs } = require('./document_indexer');

const app = express();
const port = 3000;

// Enable CORS for all origins
app.use(cors());  // This will allow all origins to make requests

// Middleware to parse JSON
app.use(bodyParser.json());

// Define API endpoint to process user questions
app.post('/ask', (req, res) => {
  const question = req.body.question;

  console.log("Received question:", question); // Log the received question

  try {
    const response = searchDocs(question);  // Process the search
    console.log("Sending response:", response);  // Log the response from searchDocs

    res.json({ answer: response });  // Send the response back
  } catch (error) {
    console.error("Error processing the question:", error);  // Log errors if any
    res.status(500).json({ answer: "Sorry, something went wrong. Please try again." });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Chatbot backend listening at http://localhost:${port}`);
});
