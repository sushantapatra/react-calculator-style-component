import React, { useState } from "react";
import { Container, Screen, Prevoius, Current, Button } from "../styles/Main";
const Calculator = () => {
	const [current, setCurrent] = useState("");
	const [previous, setPrevious] = useState("");
	const [operations, setOperations] = useState("");
	const appendValueHandler = (element) => {
		const value = element.target.getAttribute("data");
		if (value === "." && current.includes(".")) return;
		setCurrent(current + value);
	};
	const deleteHandler = () => {
		setCurrent(String(current).slice(0, -1));
	};
	const allclearHandler = () => {
		setCurrent("");
		setPrevious("");
		setOperations("");
	};

	const chooseOperationHandler = (ele) => {
		if (current === "") return;
		if (previous !== "") {
			let value = compute();
			setPrevious(value);
		} else {
			setPrevious(current);
		}
		setCurrent("");
		setOperations(ele.target.getAttribute("data"));
	};

	const equalsHandler = () => {
		let value = compute();
		console.log(value);
		if (value === undefined || value == null) return;

		setCurrent(value);
		setPrevious("");
		setOperations("");
	};
	const compute = () => {
		let result;
		let previousNumber = parseFloat(previous);
		let currentNumber = parseFloat(current);

		if (isNaN(previousNumber) || isNaN(currentNumber)) return;

		switch (operations) {
			case "÷":
				result = previousNumber / currentNumber;
				break;
			case "x":
				result = previousNumber * currentNumber;
				break;
			case "+":
				result = previousNumber + currentNumber;
				break;
			case "-":
				result = previousNumber - currentNumber;
				break;
			default:
				return;
				break;
		}
		return result;
	};
	return (
		<>
			<Container>
				<Screen>
					<Prevoius>
						{previous} {operations}{" "}
					</Prevoius>
					<Current>{current}</Current>
				</Screen>
				<Button gridSpan={2} control onClick={allclearHandler}>
					AC
				</Button>
				<Button onClick={deleteHandler}>DEL</Button>
				<Button operation data={"÷"} onClick={chooseOperationHandler}>
					÷
				</Button>
				<Button onClick={appendValueHandler} data={7}>
					7
				</Button>
				<Button onClick={appendValueHandler} data={8}>
					8
				</Button>
				<Button onClick={appendValueHandler} data={9}>
					9
				</Button>
				<Button operation data={"x"} onClick={chooseOperationHandler}>
					x
				</Button>
				<Button onClick={appendValueHandler} data={4}>
					4
				</Button>
				<Button onClick={appendValueHandler} data={5}>
					5
				</Button>
				<Button onClick={appendValueHandler} data={6}>
					6
				</Button>
				<Button operation data={"+"} onClick={chooseOperationHandler}>
					+
				</Button>
				<Button onClick={appendValueHandler} data={1}>
					1
				</Button>
				<Button onClick={appendValueHandler} data={2}>
					2
				</Button>
				<Button onClick={appendValueHandler} data={3}>
					3
				</Button>
				<Button operation data={"-"} onClick={chooseOperationHandler}>
					-
				</Button>
				<Button decimal onClick={appendValueHandler} data={"."}>
					.
				</Button>
				<Button onClick={appendValueHandler} data={0}>
					0
				</Button>
				<Button gridSpan={2} equals data={"="} onClick={equalsHandler}>
					=
				</Button>
			</Container>
		</>
	);
};

export default Calculator;
