import logo from './logo.svg';
import './App.css';
import React from 'react';
//import ParentComponent from './parentComponent';
import ParentClassComponent from './parentClassComponent';
import MyComponent from './myComponent';
import Album from './List1';
import Book from './List2book';
import City from './List3city';
import Animal from './List4animal';
function App() {
  return (
    <div className="App">
      
      <ParentClassComponent />
      <MyComponent />
      <Album />
      <Book />
      <City />
      <Animal />
    </div>
  );
}

export default App;
