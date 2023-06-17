import React, { useRef } from 'react';
import Header from './components/header/Header';
import NoteContainer from './components/notecontainer/NoteContainer';

import './App.scss';

const App = () => {
  const input=useRef();

  function handleChange(event){
    console.log(event.target.value);
  }

  return (
    <div className="app">
      <Header/>
      {/* <Header />
      <div className="content">
        <Sidebar />
        <NoteList />
      </div> */}
      <NoteContainer/>
      {/* <input type="text" ref={input} onChange={handleChange}/> */}
    </div>
  );
};

export default App;
