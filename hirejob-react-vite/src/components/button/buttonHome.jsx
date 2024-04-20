import React from 'react';
import PropTypes from 'prop-types';

const ButtonLandingHome = ({onClick, text}) => {
    const handleLandingHome = () => {
        onClick();
    };
    return (
        <button
            onClick={handleLandingHome}
            type='button'
            className="w-24 h-10 focus:outline-none text-white bg-purple-800 hover:bg-purple-900 focus:ring-4 focus:ring-purple-300 font-semibold rounded-md text-sm px-6 py-2.5 mb-2 dark:bg-purple-700 dark:hover:bg-purple-800 dark:focus:ring-purple-900">
            {text}
        </button>
    );
};

ButtonLandingHome.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired
};

export default ButtonLandingHome