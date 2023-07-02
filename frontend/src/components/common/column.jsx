// Column.js
import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Card from "./card";

function Column({column, tasks}){
    return (
        <div className="column">
            {column.title}
            <Droppable key={column.id} droppableId={column.id}>
                {(provided) => (
                    <div className="task-list"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {tasks.map((task, index) => {
                            return <Card key={task.id} task={task} index={index} />
                        })}
                    </div>
                )}
            </Droppable>
        </div>
)};

export default Column;