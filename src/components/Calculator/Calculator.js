import React, { useState,useEffect, useRef  } from "react";
import "./Calculator.css";

function Calculator() {
	const [input, setInput] = useState("");

	const inputRef = useRef(null);

    // Use useEffect to focus on the input when the component mounts
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []); 

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
				<input type="text" value={input} ref={inputRef}  />
				<span className="clearIcon" onClick={clearInput}>&times;</span>
				<div className="keypad">
					<button className="numberButton" onClick={() => handleInput("1")}>1</button>
					<button className="numberButton" onClick={() => handleInput("2")}>2</button>
					<button className="numberButton" onClick={() => handleInput("3")}>3</button>
					<button className="opButton" onClick={() => handleInput("+")}>+</button>
					<button className="numberButton" onClick={() => handleInput("4")}>4</button>
					<button className="numberButton" onClick={() => handleInput("5")}>5</button>
					<button className="numberButton" onClick={() => handleInput("6")}>6</button>
					<button className="opButton" onClick={() => handleInput("-")}>-</button>
					<button className="numberButton" onClick={() => handleInput("7")}>7</button>
					<button className="numberButton" onClick={() => handleInput("8")}>8</button>
					<button className="numberButton" onClick={() => handleInput("9")}>9</button>
					<button className="opButton" onClick={() => handleInput("*")}>*</button>
					<button className="numberButton" onClick={() => handleInput("0")}>0</button>
					<button className="opButton" onClick={() => handleInput(".")}>.</button>
					<button className="opButton" onClick={clearInput}>AC</button>
					<button className="opButton" onClick={() => handleInput("/")}>/</button>
					<button className="opButton equals" onClick={calculate}>=</button>
					
				</div>
			</div>

		</div>
	);
}

export default Calculator;
