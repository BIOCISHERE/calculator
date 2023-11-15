import React, { useState } from "react";
import "../../styles/home.css";

export const Home = () => {
	const [isNmbrDisplay, setIsNmbrDisplay] = useState("0")

	const [isFirstNumber, setIsFirstNumber] = useState("0")
	const [isSecondNumber, setIsSecondNumber] = useState("0")

	const [isFirstNmbrDone, setIsFirstNmbrDone] = useState(false)
	const [isSecondNmbrDone, setIsSecondNmbrDone] = useState(false)

	const [isAddition, setIsAddition] = useState(false)
	const [isSubtraction, setIsSubtraction] = useState(false)
	const [isMultiplication, setIsMultiplication] = useState(false)
	const [isDivision, setIsDivision] = useState(false)

	const display = () => {
		if (!isFirstNmbrDone) {
			return isFirstNumber
		} else if (!isSecondNmbrDone) {
			return isSecondNumber
		} else {
			return isNmbrDisplay
		}
	}

	const numbersOnClick = (numb) => {
		if (!isFirstNmbrDone) {
			if (isFirstNumber == "0") {
				let recivingNmbr = numb
				let nmbrToString = recivingNmbr.toString()

				setIsFirstNumber(nmbrToString)
			} else {
				let recivingNmbr = numb
				let nmbrToString = recivingNmbr.toString()

				let updateNumber = isFirstNumber.concat(nmbrToString)

				setIsFirstNumber(updateNumber)
			}
		} else if (!isSecondNmbrDone) {
			if (isSecondNumber == "0") {
				let recivingNmbr = numb
				let nmbrToString = recivingNmbr.toString()

				setIsSecondNumber(nmbrToString)
			} else {
				let recivingNmbr = numb
				let nmbrToString = recivingNmbr.toString()

				let updateNumber = isSecondNumber.concat(nmbrToString)

				setIsSecondNumber(updateNumber)
			}
		} else {
			return alert("Operation done, please press the clear buttton")
		}
	}

	const addition = (num1, num2) => {
		let firstNmbr = Number(num1)
		let secondNmbr = Number(num2)

		let res = (firstNmbr + secondNmbr).toFixed(2)

		setIsNmbrDisplay(res)
	}

	const subtraction = (num1, num2) => {
		let firstNmbr = Number(num1)
		let secondNmbr = Number(num2)

		let res = (num1 - num2).toFixed(2)

		setIsNmbrDisplay(res)
	}

	const clearButton = () => {
		setIsNmbrDisplay("0")
		setIsFirstNumber("0")
		setIsSecondNumber("0")
		setIsFirstNmbrDone(false)
		setIsSecondNmbrDone(false)
		setIsAddition(false)
		setIsSubtraction(false)
		setIsMultiplication(false)
		setIsDivision(false)
	}

	const resultButton = () => {
		setIsFirstNmbrDone(true)
		setIsSecondNmbrDone(true)
		if (isAddition) {
			addition(isFirstNumber, isSecondNumber)
		} else if (isSubtraction){
			subtraction(isFirstNumber, isSecondNumber)
		}
	}

	const additionButton = () => {
		setIsFirstNmbrDone(true)
		setIsAddition(true)
	}

	const subtractionButton = () => {
		setIsFirstNmbrDone(true)
		setIsSubtraction(true)
	}

	return (
		<div className="container-fluid">
			<div className="row calculatorShape m-auto">
				<div className="col">
					<div className="border border-dark calculatorInput">
						<h1>{display()}</h1>
					</div>
					<div className="row">
						<div className="col">
							<button className="calculatorBTN" onClick={() => numbersOnClick(7)}>7</button>
							<button className="calculatorBTN" onClick={() => numbersOnClick(8)}>8</button>
							<button className="calculatorBTN" onClick={() => numbersOnClick(9)}>9</button>
							<button className="calculatorBTN">÷</button>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<button className="calculatorBTN" onClick={() => numbersOnClick(4)}>4</button>
							<button className="calculatorBTN" onClick={() => numbersOnClick(5)}>5</button>
							<button className="calculatorBTN" onClick={() => numbersOnClick(6)}>6</button>
							<button className="calculatorBTN">X</button>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<button className="calculatorBTN" onClick={() => numbersOnClick(1)}>1</button>
							<button className="calculatorBTN" onClick={() => numbersOnClick(2)}>2</button>
							<button className="calculatorBTN" onClick={() => numbersOnClick(3)}>3</button>
							<button className="calculatorBTN" onClick={() => subtractionButton()}>-</button>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<button className="calculatorBTN" onClick={() => numbersOnClick(0)}>0</button>
							<button className="calculatorBTN" onClick={() => numbersOnClick(".")}>.</button>
							<button className="calculatorBTN" onClick={() => resultButton()}>=</button>
							<button className="calculatorBTN" onClick={() => additionButton()}>+</button>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<button className="clearBTN" onClick={() => clearButton()}>Clear</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};
