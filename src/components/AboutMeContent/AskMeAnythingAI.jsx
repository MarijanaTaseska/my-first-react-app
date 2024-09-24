import React, { useState } from 'react';
import axios from 'axios';

const AskMeAnything = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/ask', { question });
      setAnswer(response.data.answer);
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
    </div>
  );
};

export default AskMeAnything;
