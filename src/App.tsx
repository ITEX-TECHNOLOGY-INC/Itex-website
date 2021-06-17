
import './App.scss';
import React from 'react';
import useFetch from './custom-hooks/useFetch';


function App() {
  return (
    <div className="App">

<h1>Website under Development{console.log(useFetch("https://jsonplaceholder.typicode.com/todos/1"))}</h1>
    </div>
  );
}

export default App;
