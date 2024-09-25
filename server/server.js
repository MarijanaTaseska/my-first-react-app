require('dotenv').config();
const express = require('express');
const path = require('path');
//const OpenAI = require('openai');

const app = express();
const PORT = process.env.PORT || 6000;

app.use(express.json()); // Middleware to parse JSON

//OPEN AI Configuration
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,  // Use API key from .env
// });

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));

  // Serve index.html for all non-API routes in production
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

// Example API route
// app.post('/api/ask', async (req, res) => {
//   const { question } = req.body;
//   try {
//     // Send question to OpenAI API
//     const response = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo", // You can use other models like GPT-4 depending on access
//       messages: [{ role: "user", content: question }],
//       max_tokens: 100,
//       temperature: 0.7,
//     });

//     const answer = response.choices[0].message.content.trim(); // Get the AI's response
//     res.json({ answer });
//   } catch (error) {
//     console.error("Error with OpenAI API:", error);
//     res.status(500).json({ error: "Failed to get response from AI" });
//   }
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
