import React, { useState } from 'react';
import './Calculator.css'; 

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [showLoveMessage, setShowLoveMessage] = useState(false);

  const handleButtonClick = (value) => {
    switch (value) {
      case 'C':
        setExpression('');
        setShowLoveMessage(false);
        break;
      case '←':
        setExpression(expression.slice(0, -1));
        setShowLoveMessage(false);
        break;
      case '=':
        setShowLoveMessage(true);
        break;
      default:
        setExpression(expression + value);
        break;
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">
          <span>{expression}</span>
          {showLoveMessage && (
            <div className="love-message">
              <p>I LOVE YOU</p>
              <img src="https://i.ibb.co/QmhkwQd/peach-cat.gif" alt="Love GIF" />
            </div>
          )}
        </div>
        <div className="buttons">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
          
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
          
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
          
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={() => handleButtonClick('=')}>=</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
          
          <button onClick={() => handleButtonClick('C')}>C</button>
          <button onClick={() => handleButtonClick('←')}>←</button>
          <button onClick={() => handleButtonClick('%')}>%</button>
          <button onClick={() => handleButtonClick('+/-')}>+/-</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
