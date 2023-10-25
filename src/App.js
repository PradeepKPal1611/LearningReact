import logo from './logo.svg';
import './App.css';
import React from 'react';
//import ParentComponent from './parentComponent';
import ParentClassComponent from './parentClassComponent';
import MyComponent from './myComponent';
import Album from './List1';
import Book from './bookList2';

function App() {
  return (
    <div className="App">
      
      <ParentClassComponent />
      <MyComponent />
      <Album />
      <Book />
    </div>
  );
}

export default App;
