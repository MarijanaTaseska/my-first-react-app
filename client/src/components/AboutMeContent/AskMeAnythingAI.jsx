import React, { useState } from 'react';
import axios from 'axios';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'



const AskMeAnything = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false)
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/ask', { question });
      setAnswer(response.data.answer || "No response available");
      console.log(answer)
    } catch (error) {
      console.error('Error:', error);
      setAnswer('An error occurred while asking the question.');
    } finally {
      setLoading(false);
    }
  };
  const handleClose = () => {
    setOpen(false);  // Close the modal
  };
  return (
    <div>
      <h2>Ask Me Anything</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '500px' }}>
      <TextField
          label="Ask me anything"
          variant="outlined"
          fullWidth
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
       <Button type="submit" variant="contained" color="primary" disabled={loading}>
          {loading ? 'Thinking...' : 'Ask'}
        </Button>
      </form>
      {/*MUI DIALOG to display the AI response */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>AI Response</DialogTitle>
        <DialogContent>
          <p>{answer}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AskMeAnything;
