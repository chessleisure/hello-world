import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const DATA = [
  {groupId: "1", 
    ruleId: "1002", 
    priority: "0", 
    metadata: "1" , 
    child: ["1","2"],
    position: "0"
  },
  { groupId: "2", 
    ruleId: "2048", 
    priority: "0", 
    metadata: "1=1" , 
    child: [],
    position: "1"
  },
  { groupId: "3", 
    ruleId: "3017", 
    priority: "1", 
    metadata: "1+1=2" , 
    child: ["3"],
    position: "1"
  },
  { groupId: "4", 
    ruleId: "4058", 
    priority: "1", 
    metadata: "1+2=3" , 
    child: [],
    position: "2"
  },
  { groupId: "5", 
    ruleId: "5001", 
    priority: "1", 
    metadata: "2+1=3" , 
    child: [],
    position: "2"
  },
  { groupId: "6", 
    ruleId: "6041", 
    priority: "1", 
    metadata: "2+2=4" , 
    child: [],
    position: "3"
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App rules = {DATA}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
