import React from 'react';
import './input.css';

const InputText = ({ className, label, type = 'text', placeholder, value = '', onChange, id, name }) => {
  const inputClassName = `shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className ? className : ''}`;
  return (
    <div className='textInput flex flex-col mb-4'>
      {label && <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="textfield">{label}</label>}
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClassName}
      />
    </div>
  );
}

export default InputText;
