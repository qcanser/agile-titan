// Card.js
import React, { useEffect } from "react";
import { Draggable } from "react-beautiful-dnd";
import Editable from "./editable";
import { useState } from "react";
import Alarm from "./alarm";
// import { useEffect } from "react";

function Card({task, index}){
    const date = new Date()
    date.setFullYear(date.getFullYear() + 1)
    const [due, setDue] = useState(date);
    const [alarmDisplay, setAlarmDisplay] = useState("none")

    const changeDue = (e) => {
        setDue(new Date(e.target.value))
        console.log(due)
    }

    const triggerAlarm = () => {
        console.log("trig")
        setAlarmDisplay("block")
        console.log(alarmDisplay)
    }

    var done;

    useEffect(() => {
        done = setInterval(() =>{
            const date = new Date()
            
            if (date.getTime() > due.getTime()){
                triggerAlarm()
            }
        }, 1000)
        console.log(date, date.getTime, due, due.getTime, done)
    }, [due])

    return (
        task ?
        <>
        <Draggable key={task.id} draggableId={task.id} index={index}>
            {(provided) => (
                <div className="task nes-container with-title is-centered w-20 max-w-30"
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}>
                <h2 className="title">
                    <Editable text={task.title}/>
                </h2>
                <Editable text={task.description}/>
                <div className="time">
                    <h6><label htmlFor="timedue" className="labeltime">Due:</label></h6>
                    <input id="timedue" type="datetime-local" value={due} onChange={changeDue}></input>
                </div>
                </div>
            )}
        </Draggable>
        <Alarm alarmDisplay={alarmDisplay}/>
        </> : <></>
    );
};

export default Card;