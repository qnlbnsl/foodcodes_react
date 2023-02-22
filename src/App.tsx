import React, { useState } from 'react';
import './App.css';
import Results from './Results';
import { getSearchResults } from './getData';


// console.log()

function App() {
  const [data, setData] = useState(getSearchResults(' '))

  const updateBody = (query: string) => {
    setData(getSearchResults(query))
  }
  return (
    <div className="App">
      <input id='test' onChange={ e=> updateBody(e.target.value)}></input>
      <Results items={data}/>
    </div>
  );
}

export default App;
