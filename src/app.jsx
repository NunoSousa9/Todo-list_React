import React, { useState } from 'react';
import TaskForm from './tasks/task-form';
import TaskList from './tasks/task-list';
import Nav from './nav';

const OPTIONS = [
    {
        name: 'All',
        filter: () => true
    },
    {
        name: 'Complete',
        filter: ({ complete }) => complete
    },
    {
        name: 'Incomplete',
        filter: ({ complete }) => !complete
    }
];

function App() {
    const [tasks, setTasks] = useState([]);
    const [selected, setSelected] = useState(0);

    function addTask(taskTitle) {
        if (tasks.find(({ title }) => title === taskTitle)) {
            return false;
        }

        setTasks([...tasks, { title: taskTitle, complete: false }]);
        return true;
    }

    function flipStatus(taskTitle) {
        const newTasks = tasks.map((task) =>
            task.title === taskTitle ? { ...task, complete: !task.complete } : task
        );

        setTasks(newTasks);
    }

    function removeTask(taskTitle) {
        setTasks(tasks.filter(({ title }) => taskTitle !== title));
    }

    const filteredTasks = tasks.filter(OPTIONS[selected].filter);

    return (
        <div className="container-fluid p-0 h-100">
            <div className="w-100 bg-light border-bottom">
                <div className="container">
                    <h1 className="text-center p-4 font-weight-bold">TODO LIST</h1>
                    <TaskForm onSubmit={addTask} />
                    <Nav
                        options={OPTIONS.map(({ name }) => name)}
                        selected={selected}
                        select={setSelected}
                    />
                </div>
            </div>
            {filteredTasks.length > 0 && (
                <div className="container">
                    <TaskList
                        tasks={filteredTasks}
                        flipStatus={flipStatus}
                        removeTask={removeTask}
                    />
                </div>
            )}
        </div>
    );
}

export default App;
