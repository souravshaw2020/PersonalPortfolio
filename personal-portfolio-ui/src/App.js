import React from 'react'
import './App.css';
import Component from './components/Component';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Component/>
    </div>
  );
}

export default App;
