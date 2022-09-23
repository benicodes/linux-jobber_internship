const taskList = {
    tasks: {
        'task-1': { id: "task-1", item: "Build LinuxJobber Projects" },
        'task-2': { id: "task-2", item: "Build ALX Projects" },
        'task-3': { id: "task-3", item: "Go Swimming" },
        'task-4': { id: "task-4", item: "Sleep All Day" },
        'task-5': { id: "task-5", item: "Build Usenette App" },
        'task-6': { id: "task-6", item: "Go Shopping" },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Weekly Task',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5', 'task-6'],
        },
    },
    columnOrder: ['colum-1'],
}

export const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Take out the garbage' },
        'task-2': { id: 'task-2', content: 'Watch my favorite show' },
        'task-3': { id: 'task-3', content: 'Charge my phone' },
        'task-4': { id: 'task-4', content: 'Cook dinner' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
    },
    // Facilitate reordering of the columns
    columnOrder: ['colum-1'],
};

export default taskList;