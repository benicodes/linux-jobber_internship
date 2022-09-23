import React, { useState } from 'react';
import { weeklyData, dailyData } from '../../static/initial-data';
import './tasks.css';
import TaskList from './TaskList';
import { DragDropContext } from 'react-beautiful-dnd';

export default function Tasks({ data, deleteTask }) {
    const [taskRoll, upDateTaskRoll ] = useState(data)

    // const handleOnDragEnd = result => {
    //     if(!result.destination) return;
    //     const tasks = Array.from(taskRoll)
    //     const [reorderedItem] = tasks.splice(result.source.index, 1);
    //     tasks.splice(result.destination.index, 0, reorderedItem);
        
    //     upDateTaskRoll(tasks)
    // }

    const [weekly, setWeekly] = useState(data);
    const [daily, setDaily] = useState(dailyData);

    const deleteItem = (list, index) => {
        return list.splice(index, 1)
    }

    const handleOnDragEnd = (result) => {
        const { destination, source } = result;
        if (!destination) return;

        if (source.droppableId === destination.droppableId) {
            if (source.droppableId === "Weekly_drop_area") {
                let tempList = weekly
                const removed = deleteItem(tempList, source.index)
                tempList.splice(destination.index, 0, removed[0])
                setWeekly(tempList)
            } else {
                let tempList = daily
                const removed = deleteItem(tempList, source.index)
                tempList.splice(destination.index, 0, removed[0])
                setDaily(tempList)
            }
        } else {
            let tempList1 = weekly
            let tempList2 = daily
            if (source.droppableId === "Weekly_drop_area") {
                const removed = deleteItem(tempList1, source.index)
                tempList2.splice(destination.index, 0, removed[0])
                setWeekly(tempList1)
                setDaily(tempList2)
            } else {
                const removed = deleteItem(tempList2, source.index)
                tempList1.splice(destination.index, 0, removed[0])
                setWeekly(tempList1)
                setDaily(tempList2)
            }
        }
    };

    return (
        <div className='tasker'>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <TaskList Weekly={weekly} Daily={daily} />
            </DragDropContext>

        </div>
    )
}