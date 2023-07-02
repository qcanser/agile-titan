import Card from "./components/common/card";
import Board from "./components/board";
import "./App.css";
import "nes.css/css/nes.min.css";
import Alarm from "./components/common/alarm";

function App() {
  return (
    <div className="App">
      <Card taskname="play" taskdesc="play ukulele"/>
      <Board/>
      <Alarm/>
    </div>
  );
}

export default App;

// import React, { useState } from 'react';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import './App.css';
// import Card from './components/common/card';

// const initialTasks = [
//   { id: 'task-1', title: 'Task 1', description: 'task description', columnId: "column-1"},
//   { id: 'task-2', title: 'Task 2', description: 'task description', columnId: "column-1"},
//   { id: 'task-3', title: 'Task 3', description: 'task description', columnId: "column-1"},
//   { id: 'task-4', title: 'Task 4', description: 'task description', columnId: "column-1"},
// ];

// const initialColumns = {
//   'column-1': {
//     id: 'column-1',
//     title: 'To Do',
//   },
//   'column-2': {
//     id: 'column-2',
//     title: 'In Progress',
//   },
//   'column-3': {
//     id: 'column-3',
//     title: 'Done',
//   },
// };

// const App = () => {
//   const [columns, setColumns] = useState(initialColumns);
//   const onDragEnd = (result) => {
//     const { destination, source, draggableId } = result;

//     if (!destination) {
//       return;
//     }

//     if (
//       destination.droppableId === source.droppableId &&
//       destination.index === source.index
//     ) {
//       return;
//     }

//     const sourceColumn = columns[source.droppableId];
//     const destinationColumn = columns[destination.droppableId];
//     const newSourceTaskIds = Array.from(sourceColumn.taskIds);
//     const newDestinationTaskIds = Array.from(destinationColumn.taskIds);

//     newSourceTaskIds.splice(source.index, 1);
//     newDestinationTaskIds.splice(destination.index, 0, draggableId);

//     const newColumns = {
//       ...columns,
//       [sourceColumn.id]: {
//         ...sourceColumn,
//         taskIds: newSourceTaskIds,
//       },
//       [destinationColumn.id]: {
//         ...destinationColumn,
//         taskIds: newDestinationTaskIds,
//       },
//     };

//     setColumns(newColumns);
//   };

//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       <div className="board">
//         {Object.values(columns).map((column) => (
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
// };

// export default App;