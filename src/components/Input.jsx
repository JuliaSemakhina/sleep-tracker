import React from 'react';

const Input=(props)=> {
   const { label, ...inputProps } = props;
  return (
      <>
        <label >
          {label}
      <input
        {...inputProps}
      />
    </label>
    </>
  );
};

export default Input;