import React from "react";

export default function ChildComponent(props){
    return(
        <div>
            <h1>Quiz Programming</h1>
            <p>What Programming</p>
            <button onClick={()=>props.onQuiz('react')}>React</button>
            <button onClick={()=>props.onQuiz('python')}>Python</button>
            <button onClick={()=>props.onQuiz('golang')}>Golang</button>
            <h2>{props.Answers}</h2>
        </div>
    )
}