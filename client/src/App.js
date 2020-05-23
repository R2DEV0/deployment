import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import AddNew from './views/AddNew';
import Main from './views/Main';

function App() {

  return (
    <div className="container" style={{textAlign:'center'}}>
      <h2 style={{textAlign:'center', marginBottom: '50px', textDecoration:'underline'}}>Project Manager</h2>
      <Router>
        <Main path ='/'/>
        <AddNew path = '/create' />
      </Router>
    </div>
  );
}

export default App;
