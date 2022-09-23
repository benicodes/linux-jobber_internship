import React from 'react';
import './tasks.css';
import { Droppable, Draggable } from 'react-beautiful-dnd';

export default function TaskList({ Weekly, Daily }) {
    return (
        <div className='container'>
            <Droppable droppableId='Weekly_drop_area' className='container-child'>
                {(provided) => (
                    <div
                        className='weekly box'
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        <h3>Weekly Tasks</h3>
                        <div className="scroll">
                            {Weekly.map(({ id, name, time_created, scrumgoalhistory_set }, index) => (
                                <Draggable key={id} draggableId={`${id}${index}`} index={index}>
                                    {(provided) => (
                                        <div className='task scroll'
                                            key={index}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}
                                        >
                                            {name}
                                            <div>{time_created.slice(0, 10)} at {time_created.slice(12, 16)}</div>
                                            <div className="blue">
                                                {scrumgoalhistory_set.map(({ id, done_by }) => {
                                                    return (
                                                        <p key={id}>{done_by}</p>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    </div>
                )}
            </Droppable>
            <Droppable droppableId='Daily_drop_area' className='container-child'>
                {(provided) => (
                    <div
                        className='daily box'
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        <h3>Daily Tasks</h3>
                        <div className="scroll">
                            {Daily.map(({ id, name, time_created, scrumgoalhistory_set }, index) => (
                                <Draggable key={id} draggableId={`${id}${index}`} index={index}>
                                    {(provided) => (
                                        <div className='task'
                                            key={index}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}
                                        >
                                            {name}
                                            <div>{time_created.slice(0, 10)} at {time_created.slice(12, 16)}</div>
                                            <div className='blue'>
                                                {scrumgoalhistory_set.map(({ id, done_by }) => {
                                                    return (
                                                        <p key={id}>{done_by}</p>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>

                    </div>
                )}
            </Droppable>
        </div>
    )
}
