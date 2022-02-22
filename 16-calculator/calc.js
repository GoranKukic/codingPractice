function App() {
  const [expression, setExpression] = React.useState('');
  const [answer, setAnswer] = React.useState(0);

  const display = (symbol) => {
    setExpression((prev) => prev + symbol);
  };

  const calculate = () => {
    setAnswer(eval(expression));
  };

  const clearDisplay = () => {
    setExpression('');
    setAnswer(0);
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">
          <input type="text" value={expression} placeholder="0" disabled />
          <div className="result">{answer}</div>
        </div>
        <div className="calculator__keys">
          <div onClick={() => display('+')} id="add" className="operator">
            +
          </div>
          <div onClick={() => display('-')} id="subtract" className="operator">
            -
          </div>
          <div onClick={() => display('*')} id="multiply" className="operator">
            &times;
          </div>
          <div onClick={() => display('/')} id="divide" className="operator">
            ÷
          </div>
          <div onClick={() => display('1')} id="one" className="number">
            1
          </div>
          <div onClick={() => display('2')} id="two" className="number">
            2
          </div>
          <div onClick={() => display('3')} id="three" className="number">
            3
          </div>
          <div onClick={() => display('4')} id="four" className="number">
            4
          </div>
          <div onClick={() => display('5')} id="five" className="number">
            5
          </div>
          <div onClick={() => display('6')} id="six" className="number">
            6
          </div>
          <div onClick={() => display('7')} id="seven" className="number">
            7
          </div>
          <div onClick={() => display('8')} id="eight" className="number">
            8
          </div>
          <div onClick={() => display('9')} id="nine" className="number">
            9
          </div>
          <div onClick={() => display('0')} id="zero" className="number">
            0
          </div>
          <div onClick={() => display('.')} id="decimal" className="number">
            .
          </div>
          <div onClick={clearDisplay} id="clear" className="number">
            C
          </div>
          <div onClick={calculate} id="equals" className="operator">
            =
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
