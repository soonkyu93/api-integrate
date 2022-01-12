import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ApiExam from './ApiExam';
//import ContextExam from './ContextExam';
import reportWebVitals from './reportWebVitals';
//import PersonContext from './contexts/PersonContext';
//const persons = [
//  { id:1, name: 'green', age: 20},
//  { id:2, name: 'blue', age: 28}
// ]
ReactDOM.render(
  <React.StrictMode>
    <ApiExam />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
