import React, { useState } from 'react';
import Parent from './parent'
import './App.css';
import CountContext from './countContext'

function App() {
  let countState = useState(1)
  return (
    < CountContext.Provider value={countState}>
      <div>
        <Parent />
      </div>  
    </CountContext.Provider>


  );
}

export default App;
