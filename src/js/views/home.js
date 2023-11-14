import React, { useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const [isNmbrDisplay, setIsNmbrDisplay] = useState("0")

	const [isFirstNumber, setIsFirstNumber] = useState("0")
	const [isSecondNumber, setIsSecondNumber] = useState("0")

	const numbersOnClick = (numb) => {
		if (isNmbrDisplay == "0") {
			let recivingNmbr = numb
			let nmbrToString = recivingNmbr.toString()

			setIsNmbrDisplay(nmbrToString)
		} else {
			let recivingNmbr = numb
			let nmbrToString = recivingNmbr.toString()

			let updateNumber = isNmbrDisplay.concat(nmbrToString)

			setIsNmbrDisplay(updateNumber)
			//console.log(isNmbrDisplay)
		}
	}

	return (
		<div className="container-fluid">
			<div className="row calculatorShape m-auto">
				<div className="col">
					<div className="border border-dark calculatorInput">
						<h1>{isNmbrDisplay}</h1>
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
							<button className="calculatorBTN">-</button>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<button className="calculatorBTN" onClick={() => numbersOnClick(0)}>0</button>
							<button className="calculatorBTN">.</button>
							<button className="calculatorBTN">=</button>
							<button className="calculatorBTN">+</button>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<button className="clearBTN">Clear</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};
