import './App.css';
import MoveNode from './component/MoveNode';
import MoveLine from './component/MoveLine';

import {useState, useEffect} from 'react'

function App(props) {
  const [ruleId, setId] = useState(null);
  const [translateX, setX] = useState(null);
  const [translateY, setY] = useState(null);

  var ruleList = []
  var positionUsed= [0];
  
  /*useEffect(()=>{
    ruleData[0].translateY=translateY;
  },[translateY])*/

  return (
    <div className = "DEMO">
      <h1 className = "header">Visualize static spam rule</h1>
      <body className = "rule">
        
        {
          props.rules.map((rule, index) =>{
            var temp = rule.position;
            if(positionUsed[temp] === 0){
              positionUsed.push(0);
            }
            positionUsed[temp] ++;

            ruleList.push(
              {
                index : index,
                groupId : rule.groupId,
                ruleId : rule.ruleId,
                priority : rule.priority,
                metadata : rule.metadata ,
                child : rule.child,
                position : rule.position,
                centerX : positionUsed[temp] * 150,
                centerY : rule.position * 150 + 100,
                setId : setId,
                setX : setX,
                setY : setY,
                backgroundColor : "orange",
              }
            )
            
            return <MoveNode 
                      index = {ruleList[index].index}
                      groupId = {ruleList[index].groupId} 
                      ruleId = {ruleList[index].ruleId} 
                      priority = {ruleList[index].priority}
                      metadata = {ruleList[index].metadata} 
                      child = {ruleList[index].child}
                      position = {ruleList[index].position}
                      centerX = {ruleList[index].centerX}
                      centerY = {ruleList[index].centerY}
                      setId = {setId}
                      setX = {(x) => {
                        console.log(index);
                        setX(x)
                      }}
                      setY = {setY}
                      backgroundColor = "orange"
                    />
          })
        }

        {
          ruleList.map((rule, index) => {
            return(
              rule.child.map((child, key) =>{
                return(
                  <MoveLine 
                    uX = {rule.centerX+50} 
                    uY = {rule.centerY+25} 
                    vX = {ruleList[rule.child[key]].centerX+50} 
                    vY = {ruleList[rule.child[key]].centerY+100}
                  />
                  //<div>{rule.centerX}</div>
                )
              })
            )
          })
        }

        {/*
          ruleList.map((item, index) => {
            ruleTest[0].centerX=0;
            ruleData.push(
              {
                ruleId: item.ruleId, 
                centerX: item.centerX,
                centerY: item.centerY,
                radius:10,
              }
            );
            return <div>{item}</div>;
          })
        */}
        {/*ruleList*/}
        {ruleId}{translateX}{translateY}
        {/*ruleData[1].ruleId*/}
      </body>
    </div>
  );
}

export default App;
