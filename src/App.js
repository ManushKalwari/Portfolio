import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Connect from './components/Connect';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      {/* Background blobs behind everything */}
      <div className="background"></div>

      {/* Your main content */}
      <div className="container">
        <Header />
        <main className="main">
          <Hero />
          <Portfolio />
          <Connect />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;