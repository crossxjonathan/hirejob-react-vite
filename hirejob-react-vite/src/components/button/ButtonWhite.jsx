import React from 'react';
import PropTypes from 'prop-types';

const ButtonWhiteLanding = ({onClick, text}) => {
    const handleWhiteLanding = () => {
        onClick();
    };
    return (
        <button
            onClick={handleWhiteLanding}
            type='button'
            className="w-24 h-10 bg-transparent hover:bg-purple-700 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">
            {text}
        </button>
    );
};

ButtonWhiteLanding.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired
};

export default ButtonWhiteLanding