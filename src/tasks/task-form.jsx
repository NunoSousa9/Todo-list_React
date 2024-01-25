import React, { useState } from 'react';

function TaskForm({ onSubmit }) {
    const [text, setText] = useState('');
    const [error, setError] = useState(false);

    function submit(event) {
        event.preventDefault();

        if (!text) {
            return;
        }

        const success = onSubmit(text);
        setError(!success);

        if (success) {
            setText('');
        }
    }

    return (
        <form onSubmit={submit} className="form-inline w-100 mb-5">
            <div className="form-group w-75 h-100">
                <input
                    value={text}
                    type="text"
                    className={`form-control w-100 ${error ? 'border-danger border-2' : ''}`}
                    placeholder="What needs to be done?"
                    onChange={(event) => {
                        setError(false);
                        setText(event.target.value);
                    }}
                />
            </div>
            <div className="form-group w-25 float-right h-100">
                <button type="submit" className="btn btn-primary w-100 m-0 ml-4 font-weight-bold">
                    Add
                </button>
            </div>
        </form>
    );
}

export default TaskForm;
