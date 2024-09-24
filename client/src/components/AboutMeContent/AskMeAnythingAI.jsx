import React, { useState } from 'react';
import axios from 'axios';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'

const Modal = ({ isVisible, onClose, answer }) => {
  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
      backgroundColor: 'white', padding: '20px', zIndex: 1000, border: '1px solid black'
    }}>
      <p>AI Response: {answer}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

const AskMeAnything = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  

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

  return (
    <div>
      <h2>Ask Me Anything</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask me anything..."
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Thinking...' : 'Ask'}
        </button>
      </form>
      {answer && <p>AI Response: {answer}</p>}
      <Modal isVisible={isModalVisible} onClose={() => setModalVisible(false)} answer={answer} />

    </div>
  );
};

export default AskMeAnything;
