import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cointainer from './Cointainer';
import store from './store';
function App() {
  return (
    <div className="App">
      <Cointainer store={store} />
    </div>
  );
}

export default App;
