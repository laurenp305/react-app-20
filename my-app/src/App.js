import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Header></Header>
      <Footer></Footer>
      <About></About>
      <Contact></Contact>
      <Portfolio></Portfolio>
      <Resume></Resume>
    </div>
  );
}

export default App;