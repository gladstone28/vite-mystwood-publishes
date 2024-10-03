import React from 'react';
import './main.css';

const App = () => {
  return (
    <div>
      <header>
        <h1>Mystwood Publishers Ltd.</h1>
      </header>
      <div className="hero">
        <h2>Sprout.</h2>
        <p>A book by J. Daniel Bedford</p>
        <a href="#">Read now.</a>
      </div>
      <footer id="footer">
        &copy; Mystwood Publishers Limited
      </footer>
    </div>
  );
};

export default App;
