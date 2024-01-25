import React from 'react';
import TrashIcon from '../icons/trash-icon';

function Badge({ text, bgClass }) {
    return <span className={`badge text-white float-right ${bgClass}`}>{text}</span>;
}

function TaskCard({ title, complete, onClick, onDelete }) {
    const badgeText = complete ? 'complete' : 'incomplete';
    const badgeBgClass = complete ? 'badge-success' : 'badge-warning';
    const textColor = complete ? 'text-success' : 'text-warning';

    return (
        <div className="task w-100 p-2 d-flex justify-content-between align-items-center">
            <div className="w-75 pointer" onClick={() => onClick(title)}>
                <p
                    className={`font-weight-bold m-0 pl-3 d-flex justify-content-between align-items-center ${textColor}`}
                >
                    {title} <Badge text={badgeText} bgClass={badgeBgClass} />
                </p>
            </div>
            <div className="w-25 text-center">
                <button className="btn text-danger" onClick={() => onDelete(title)}>
                    <TrashIcon />
                </button>
            </div>
        </div>
    );
}

export default TaskCard;
