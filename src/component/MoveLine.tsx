import React from 'react';

interface xxx{
    props: any
}

export default function MoveLine(props:any) {
    return(
        <svg style={{position:'absolute',left:0,top:0}}>
            <line 
                x1={props.uX} 
                y1={props.uY} 
                x2={props.vX} 
                y2={props.vY} 
                stroke = "#fa9668" 
                stroke-width = "3px"
                style={{position:'absolute'}}
            >
            </line>
        </svg>
    )
}