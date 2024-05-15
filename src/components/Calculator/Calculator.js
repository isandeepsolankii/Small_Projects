import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
	const [input, setInput] = useState("");

	const handleInput = (value) => {
		setInput(input + value);
	};

	const calculate = () => {
		try {
			setInput(eval(input).toString());
		} catch (error) {
			setInput("Error");
		}
	};

	const clearInput = () => {
		setInput("");
	};

	return (
		<div className="App">
			<div className="calculator">
				<input type="text" value={input} readOnly />
				<div className="keypad">
					<button onClick={() => handleInput("1")}>1</button>
					<button onClick={() => handleInput("2")}>2</button>
					<button onClick={() => handleInput("3")}>3</button>
					<button onClick={() => handleInput("+")}>+</button>
					<button onClick={() => handleInput("4")}>4</button>
					<button onClick={() => handleInput("5")}>5</button>
					<button onClick={() => handleInput("6")}>6</button>
					<button onClick={() => handleInput("-")}>-</button>
					<button onClick={() => handleInput("7")}>7</button>
					<button onClick={() => handleInput("8")}>8</button>
					<button onClick={() => handleInput("9")}>9</button>
					<button onClick={() => handleInput("*")}>*</button>
					<button onClick={() => handleInput("0")}>0</button>
					<button onClick={() => handleInput(".")}>.</button>
					<button onClick={calculate}>=</button>
					<button onClick={() => handleInput("/")}>/</button>
					<button onClick={clearInput}>C</button>
				</div>
			</div>
		</div>
	);
}

export default Calculator;
