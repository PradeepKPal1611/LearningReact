import logo from './logo.svg';
import './App.css';
import React from 'react';
//import ParentComponent from './parentComponent';
import ParentClassComponent from './parentClassComponent';
import MyComponent from './myComponent';
function App() {
  return (
    <div className="App">
      
      <ParentClassComponent />
      <MyComponent />
    </div>
  );
}

export default App;
