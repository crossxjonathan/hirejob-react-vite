import React from 'react'
import PropTypes from 'prop-types';
import './recruitment.css'

const RegisterRecruitment = ({ onClick, text }) => {
    const handleRegister = () => {
            onClick();
    };

    return (
        <div className='RegisterRecruitment'>
            <button type="button"
                onClick={handleRegister}
                className="focus:outline-none text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
                {text}
            </button>
        </div>
    );
};

RegisterRecruitment.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired
};

export default RegisterRecruitment;