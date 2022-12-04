import React from 'react';

import { 
    ButtonContainer
} from './styles';

interface IButton {
    label: string,
    onClick?: () => void,
    variant: string,
} 

const Button = ({label, onClick, variant='primary'}: IButton) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
        {label}
    </ButtonContainer>
  );
}

export default Button;