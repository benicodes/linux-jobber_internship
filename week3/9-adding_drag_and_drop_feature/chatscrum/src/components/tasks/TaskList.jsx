import React from 'react';
import './tasks.css';
import { Droppable, Draggable } from 'react-beautiful-dnd';

export default function TaskList({ Weekly, Daily }) {
    return (
        <div className='container'>
            <Droppable droppableId='Weekly_drop_area'>
                {(provided) => (
                    <div
                        className='weekly box'
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        <h3>Weekly Tasks</h3>
                        {Weekly.map((data, index) => (
                            <Draggable key={data} draggableId={`${data}${index}`} index={index}>
                                {(provided) => (
                                    <p className='task'
                                        key={index}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                    >
                                        {data}
                                    </p>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            <Droppable droppableId='Daily_drop_area'>
                {(provided) => (
                    <div
                        className='daily box'
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        <h3>Daily Tasks</h3>
                        {Daily.map((data, index) => (
                            <Draggable key={data} draggableId={`${data}${index}`} index={index}>
                                {(provided) => (
                                    <p className='task'
                                        key={index}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                    >
                                        {data}
                                    </p>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    )
}
