import React from 'react';

function Nav({ options, selected, select }) {
    return (
        <ul className="nav nav-tabs border-bottom-0">
            {options.map((option, index) => (
                <li className="nav-item" key={option}>
                    <button
                        className={`nav-link  ${
                            index === selected ? 'active bg-white' : 'border-bottom bg-light'
                        }`}
                        onClick={() => select(index)}
                    >
                        {option}
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default Nav;
