import React from 'react'
import PropTypes from 'prop-types';
import './buttonclick.css'

const ButtonClick = ({ onClick, text }) => {
    const handleClick = () => {
            onClick();
    };

    return (
        <div className='buttonClick'>
            <button type="button"
                onClick={handleClick}
                className="focus:outline-none text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-64 py-3 me-2 mb-2 dark:focus:ring-yellow-900">
                {text}
            </button>
        </div>
    );
};

ButtonClick.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired
};

export default ButtonClick