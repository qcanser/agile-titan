import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './common/column';

const initialTasks = [
  { id: 'task-1', title: 'Task 1', description: 'task description', columnId: "column-1"},
  { id: 'task-2', title: 'Task 2', description: 'task description', columnId: "column-1"},
  { id: 'task-3', title: 'Task 3', description: 'task description', columnId: "column-2"},
  { id: 'task-4', title: 'Task 4', description: 'task description', columnId: "column-3"}
];

const initialColumns = [
    {
        id: "column-1",
        title: "To do",
    },
    {
        id: "column-2",
        title: "In Progress"
    },
    {
        id: "column-3",
        title: "Done"
    }
]
// let data = {}
// data = columns.reduce((data, item) => data[item.id] = {...item}, data)


function Board(){
    const i_columns = initialColumns.map(item => { return { ...item,  taskIds: initialTasks.filter(task => task.columnId === item.id).map(task => { return task.id })}})
    const data = Object.fromEntries(i_columns.map((column) => [column.id.toString(), column]))
    const [columns, setColumns] = useState(data);
    const [tasks, setTasks] = useState(initialTasks);
  
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const changingTask = tasks.find(item => item.id === draggableId)
    changingTask.columnId = destination.droppableId
    setTasks([...tasks.filter(item => item.id !== draggableId), changingTask])
    console.log(tasks)

    // const sourceColumn = columns[source.droppableId];
    // const destinationColumn = columns[destination.droppableId];
    // const newSourceTaskIds = Array.from(sourceColumn.taskIds);
    // const newDestinationTaskIds = Array.from(destinationColumn.taskIds);
    // // const taskIndex = tasks.findIndex(task => task.id === draggableId);
    // // const updatedTask = { ...tasks[taskIndex], columnId: destination.droppableId };
    
    // // const newTasks = [...tasks];
    // // newTasks[taskIndex] = updatedTask;
    
    // // setTasks(newTasks);

    // newSourceTaskIds.splice(source.index, 1);

    // const newSource = {
    //     ...source,
    //     taskIds: newSourceTaskIds
    // };

    // newDestinationTaskIds.splice(destination.index, 0, draggableId);

    // const newDestination = {
    //     ...destination,
    //     taskIds: newDestinationTaskIds
    // }
    
    // setColumns(prevState =>({
    //     ...prevState,
    //     [newSource.id]: newSource,
    //     [newDestination.id]: newDestination
    // }))
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
        <div className="board">
            {Object.values(columns).map(column => {
                const columnTasks = tasks.filter((task) => task.columnId === column.id)
                return <Column key={column.id} column={column} tasks={columnTasks} />;
            })}
        </div>
    </DragDropContext>
  );

//     <DragDropContext onDragEnd={onDragEnd}>
//       <div className="board">
//         {Object.values(columns).map((column) => ({
//             const tasks = initialTasks.filter((task) =>
//             task.columnId === column.id);
//             return 
//         }
//           <div key={column.id} className="column">
//             <h2>{column.title}</h2>
//             <Droppable key={column.id} droppableId={column.id}>
//               {(provided) => (
//                 <div
//                   className="task-list"
//                   ref={provided.innerRef}
//                   {...provided.droppableProps}
//                 >
//                   {column.taskIds.map((taskId, index) => (
//                     // <Card 
//                     // key={taskId}
//                     // task
//                     // draggableId=/>
//                     // <Draggable
//                     //   key={taskId}
//                     //   draggableId={taskId}
//                     //   index={index}
//                     // >
//                     //   {(provided) => (
//                     //     <div
//                     //       className="task"
//                     //       ref={provided.innerRef}
//                     //       {...provided.draggableProps}
//                     //       {...provided.dragHandleProps}
//                     //     >
//                     //       {initialTasks.find((task) => task.id === taskId).content}
//                     //     </div>
//                     //   )}
//                     // </Draggable>
//                   ))}
//                   {provided.placeholder}
//                 </div>
//               )}
//             </Droppable>
//           </div>
//         ))}
//       </div>
//     </DragDropContext>
//   );
};

export default Board;