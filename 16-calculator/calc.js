function App () {
    const [expression, setExpression] = React.useState("");

    const display = (symbol) => {
        setExpression((prev) => prev + symbol);
    }; 

return(
    <div class="container">
      <div class="calculator">
        <div class="display">
          <input type="text" value={expression} placeholder="0" disabled />
          <div class="result">0</div>
        </div>
        <div class="calculator__keys">
          <div id="add" class="operator">+</div>
          <div id="subtract" class="operator">-</div>
          <div onclick={() => display("*")} id="multiply" class="operator">&times;</div>
          <div id="divide" class="operator">÷</div>
          <div id="one" class="number">1</div>
          <div id="two" class="number">2</div>
          <div id="three" class="number">3</div>
          <div id="four" class="number">4</div>
          <div id="five" class="number">5</div>
          <div id="six" class="number">6</div>
          <div id="seven" class="number">7</div>
          <div id="eight" class="number">8</div>
          <div id="nine" class="number">9</div>
          <div id="zero" class="number">0</div>
          <div id="decimal" class="number">.</div>
          <div id="clear" class="number">C</div>
          <div id="equals" class="operator">=</div>
        </div>
      </div>
    </div>
)

}

ReactDOM.render(<App/>, document.getElementById("root"))