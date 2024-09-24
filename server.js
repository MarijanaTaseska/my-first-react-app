require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.json()); // Middleware to parse JSON

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));

  // Serve index.html for all non-API routes in production
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

// Example API route
app.post('/api/ask', (req, res) => {
  const { question } = req.body;
  res.json({ answer: `You asked: ${question}` });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
