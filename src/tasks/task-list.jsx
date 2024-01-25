import React from 'react';
import TaskCard from './task-card';

function TaskList({ tasks, flipStatus, removeTask }) {
    return (
        <div className="border border-top-0">
            {tasks.map((task) => (
                <TaskCard key={task.title} onClick={flipStatus} {...task} onDelete={removeTask} />
            ))}
        </div>
    );
}

export default TaskList;
