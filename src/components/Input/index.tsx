import React from 'react';

import { 
    InputContainer
} from './styles';

interface IInput {
  value?: string,
}

const Input = ({value}: IInput) => {
  return (
    <InputContainer>
        <input disabled value={value}/>
    </InputContainer>
  );
}

export default Input;