import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UseContextMain from './components/functional/usecontext/UseContextMain';
import FunMain from './components/functional/FunMain'

// import ClassTest from './components/practiceFolder';

ReactDOM.render(
  <React.StrictMode>
    {/* <FunMain /> */}
    <App />
    {/* <ClassTest /> */} 
     {/* <UseContextMain /> */}
  </React.StrictMode>,
  document.getElementById('root')
);


