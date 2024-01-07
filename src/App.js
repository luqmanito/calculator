import "./App.css";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("0");

  const handleNumber = (e) => {
    const number = e.target.textContent;
    if (display === "0") {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperator = (e) => {
    const operator = e.target.textContent;
    setDisplay(display + " " + operator + " ");
  };

  const handleEqual = () => {
    setDisplay(eval(display));
  };

  const handleClear = () => {
    setDisplay("0");
  };

  const handleDecimal = () => {
    const array = display.split(" ");
    const lastElement = array[array.length - 1];

    if (!lastElement.includes(".")) {
      setDisplay(display + ".");
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <div id="display" className="row">
          {display}
        </div>
        <div onClick={handleClear} id="clear" className="row">
          AC
        </div>
        <div onClick={handleNumber} id="seven">
          7
        </div>
        <div onClick={handleNumber} id="eight">
          8
        </div>
        <div onClick={handleNumber} id="nine">
          9
        </div>
        <div onClick={handleOperator} id="multiply">
          *
        </div>
        <div onClick={handleNumber} id="four">
          4
        </div>
        <div onClick={handleNumber} id="five">
          5
        </div>
        <div onClick={handleNumber} id="six">
          6
        </div>
        <div onClick={handleOperator} id="divide">
          /
        </div>
        <div onClick={handleNumber} id="one">
          1
        </div>
        <div onClick={handleNumber} id="two">
          2
        </div>
        <div onClick={handleNumber} id="three">
          3
        </div>
        <div onClick={handleOperator} id="add">
          +
        </div>
        <div onClick={handleNumber} id="zero">
          0
        </div>
        <div onClick={handleDecimal} id="decimal">
          .
        </div>
        <div onClick={handleEqual} id="equals">
          =
        </div>
        <div onClick={handleOperator} id="subtract">
          -
        </div>
      </div>
    </div>
  );
}

export default App;
