import React from 'react';

import './InputForm.scss';

const InputForm = ({ handleChange, label, ...formProps }) => (
  <div className='group'>
    <input className='input-form' onChange={handleChange} {...formProps} />

    {label ? (
      <label
        className={`${formProps.value.length ? 'shrink' : ''} input-form-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default InputForm;
