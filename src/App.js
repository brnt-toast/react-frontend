import React from 'react'
import Button from 'react-bootstrap/Button';
import NavBar from './components/NavBar'
import FAQ from './components/FAQ'
import Box from './components/Box'
import Data from './components/Data'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col">

            <Box />

          </div>
          <div className="col">

            <Box />

          </div>
          <div className="col">

            <Box />

          </div>
          <div className="col">
            
            <Box />

          </div>
        </div>
      </div>
      <Data />
      <section className="FAQ">
        <h2> FAQ: </h2>

      <FAQ />
      </section>
    </div>
  );
}

export default App;
