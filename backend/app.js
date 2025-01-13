const express = require('express');
const bodyParser = require('body-parser');
const { searchDocs } = require('./document_indexer');

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Define API endpoint to process user questions
app.post('/ask', (req, res) => {
    const question = req.body.question;
    const response = searchDocs(question);
    res.json({ answer: response.answer });
});

// Start the server
app.listen(port, () => {
    console.log(`Chatbot backend listening at http://localhost:${port}`);
});
