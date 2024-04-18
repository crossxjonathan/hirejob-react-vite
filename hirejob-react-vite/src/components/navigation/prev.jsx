import React from 'react';
import './prev.css';

const Prev = () => {
    return (
        <div className='prevbutton'>
            <button
                type="button"
                className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 transition duration-300"
            >
                <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 14 10"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 5H1m0 0l4-4M1 5l4 4"
                    />
                </svg>
                <span className="sr-only">prevbutton</span>
            </button>
        </div>
    );
}

export default Prev;
