import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import {motion} from 'framer-motion'
import './App.css'


function App() {
  return (
    <div className="App styles_MainBanner ">
      
  <header className='Header'>
  <Header />
  </header>
      <main className='Content'>
      <Content />
      <div className="circle">
          <motion.div
           className="ball"
           initial={{ rotate: 0 }}  /* Starting position */
           animate={{ rotate: 360 }}  /* Full rotation */
           transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </main>
      <footer className='Footer'>
      <Footer />
      </footer>
  </div>

);
};

export default App;