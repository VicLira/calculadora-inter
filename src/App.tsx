import { useState } from 'react';

import Input from './components/Input';
import Button from './components/Button';

import {
  Container,
  Content,
  Row,
  Column
} from './styles';

function App() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  const handleAddNumber = (number: string) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleSumNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  } 

  const handleMinusNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-')
    } else {
      const res = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(res))
      setOperation('')
    }
  } 

  const handleMultNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*')
    } else {
      const res = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(res))
      setOperation('')
    }
  } 

  const handleDivNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('÷')
    } else {
      const res = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(res))
      setOperation('')
    }
  } 

  const handleFracNumber = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setOperation('1/')
    } else {
      const res = (1 / Number(currentNumber));
      setCurrentNumber(String(res.toFixed(2)))
      setOperation('')
    }
  } 

  const handlePowered2Number = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setOperation('^2')
    } else {
      const res = Math.pow(Number(currentNumber), 2);
      setCurrentNumber(String(res))
      setOperation('')
    }
  } 

  const handleSqrtNumber = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setOperation('√')
    } else {
      const res = Math.sqrt(Number(currentNumber));
      setCurrentNumber(String(res))
      setOperation('')
    }
  } 

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch(operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '*':
          handleMultNumbers();
          break;
        case '÷':
          handleDivNumbers();
          break;
        case '1/':
          handleFracNumber();
          break;
        case '^2':
          handlePowered2Number();
          break;
        case '√':
          handleSqrtNumber();
          break;
        default:
          break;
      }
    } 
  } 

  return (
    <Container>
      
      <Content>
        <Input value={currentNumber}/>
        <div>
          <Row>
            <Button variant='secondary' label='1/x' onClick={handleFracNumber}/>
            <Button variant='secondary' label='x2' onClick={handlePowered2Number}/>
            <Button variant='secondary' label='2√x' onClick={handleSqrtNumber}/>
            <Button variant='secondary' label='÷' onClick={handleDivNumbers}/>
          </Row>

          <Row>
            <Button variant='primary' label='7' onClick={() => handleAddNumber('7')}/>
            <Button variant='primary' label='8' onClick={() => handleAddNumber('8')}/>
            <Button variant='primary' label='9' onClick={() => handleAddNumber('9')}/>
            <Button variant='secondary' label='X' onClick={handleMultNumbers}/>
          </Row>

          <Row>
            <Button variant='primary' label='4' onClick={() => handleAddNumber('4')}/>
            <Button variant='primary' label='5' onClick={() => handleAddNumber('5')}/>
            <Button variant='primary' label='6' onClick={() => handleAddNumber('6')}/>
            <Button variant='secondary' label='-' onClick={handleMinusNumbers}/>
          </Row>

          <Row>
            <Button variant='primary' label='1' onClick={() => handleAddNumber('1')}/>
            <Button variant='primary' label='2' onClick={() => handleAddNumber('2')}/>
            <Button variant='primary' label='3' onClick={() => handleAddNumber('3')}/>
            <Button variant='secondary' label='+' onClick={handleSumNumbers}/>
          </Row>

          <Row>
            <Button variant='primary' label='C' onClick={handleOnClear}/>
            <Button variant='primary' label='0' onClick={() => handleAddNumber('0')}/>
            <Button variant='primary' label='.' onClick={() => handleAddNumber('.')}/>
            <Button variant='secondary' label='=' onClick={handleEquals}/>
          </Row>
        </div>
          
        
      </Content>
    </Container>
  );
}

export default App;
