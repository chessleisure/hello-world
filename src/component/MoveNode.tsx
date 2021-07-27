import React, {useState, useEffect, useCallback} from 'react';

export default function MoveNode(props:any) {
    const [buttonState, setButtonState] =  useState(false);
    const [isMove, setMove] = useState(false);
    const [translateX, setX] = useState(0);
    const [translateY, setY] = useState(0);
    const [lastX, setlastX] = useState(0);
    const [lastY, setlastY] = useState(0);

    function handleClick()  {
        setButtonState(!buttonState);
    }
    
    const onMouseMove = useCallback(
        e => {
          if (!isMove) {
            return;
          }
          if(lastX && lastY) {
              let dx = e.clientX - lastX;
              let dy = e.clientY - lastY;
              setX(translateX + dx);
              setY(translateY + dy);
              props.setX(translateX);
              props.setY(translateY);
          }
          setlastX(e.clientX);
          setlastY(e.clientY);
        },
        [isMove, translateX, translateY, lastX, lastY]
    );
    
    const onMouseUp = () => {
        setMove(false);
        setlastX(0);
        setlastY(0);
    };
    
    const onMouseDown = e => {
        e.stopPropagation();
        setMove(true);
    };
    
    useEffect(() => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
        return () => {
          document.removeEventListener("mousemove", onMouseMove);
          document.removeEventListener("mouseup", onMouseUp);
        };
    }, [onMouseMove]);
    
    return(
        <div 
            className = "rule"
            onMouseDown={onMouseDown}
            style={{position:'absolute',left:`${props.centerX}px`,top:`${props.centerY}px`,transform: `translateX(${translateX}px)translateY(${translateY}px)`}}
        >
            <view 
                className = {buttonState ? "ruleName_clicked" :"ruleName"} 
                onClick={handleClick} 
            >
                <h1 className = "ruleNameFont">R:{props.centerX}</h1>
            </view>
            <view className = {buttonState ? "ruleContent" :""}>
                <h1 className = "ruleContentFont">
                    {buttonState ? props.metadata :""}
                </h1>
            </view>
        </div>
    );
}