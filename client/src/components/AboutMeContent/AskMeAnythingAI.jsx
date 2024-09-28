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
    setQuestion('');
    try {
      const response = await axios.post('/api/ask', { question });
      setAnswer(response.data.answer || "No response available");
      setOpen(true) //open the modal after recieeving response
    } catch (error) {
      console.error('Error:', error);
      setAnswer('OpenAI is not working at the moment due to exceeded quota');
      setOpen(true)
    } finally {
      setLoading(false);
    }
  };
  const handleClose = () => {
    setOpen(false);  // Close the modal
  };
  return (
    <div style={{padding:"30px"}}>
      <h2 style={{paddingLeft:'20px'}}>Ask Me Anything here </h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '500px' }}>
      <TextField
          label="Ask me anything"
          placeholder='Just dont ask me about the secret sauce...'
          variant="outlined"
          fullWidth
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
          sx={{
            input: { color: 'darkblue' },  // Change input text color
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'lightgray',  // Border color
              },
              '&:hover fieldset': {
                borderColor: 'white',  // Border color on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: 'darkblue',  // Border color on focus
              },
            },
            '& .MuiInputLabel-root': { color: 'white' },  // Label color
            '& .MuiInputLabel-root.Mui-focused': { color: 'darkblue' },  // Label color on focus
          }}
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
