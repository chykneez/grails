import React from 'react';

import {
  GroupContainer,
  InputFormContainer,
  InputFormLabel
} from './InputFormStyles';

const InputForm = ({ handleChange, label, ...formProps }) => (
  <GroupContainer>
    <InputFormContainer onChange={handleChange} {...formProps} />

    {label ? (
      <InputFormLabel
        className={`${formProps.value.length ? 'shrink' : ''} input-form-label`}
      >
        {label}
      </InputFormLabel>
    ) : null}
  </GroupContainer>
);

export default InputForm;
