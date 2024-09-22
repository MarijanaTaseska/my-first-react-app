import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import './App.css'


function App() {
  return (
    <div className="App">
      
  <header className='Header'>
  <Header />
  </header>
      <main className='Content'>
      <Content />
      </main>
      <footer className='Footer'>
      <Footer />
      </footer>
  </div>

);
};

export default App;