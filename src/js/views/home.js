import React, { useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const [isFirstNumber, setIsFirstNumber] = useState("0")
	const [isSecondNumber, setIsSecondNumber] = useState("0")

	const numbersOnClick = (numb) => {
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
	}

	return (
		<div className="container-fluid">
			<div className="row calculatorShape m-auto">
				<div className="col">
					<div className="border border-dark calculatorInput">
						<h1>{isFirstNumber}</h1>
					</div>
					<div className="row">
						<div className="col">
							<button className="calculatorBTN" onClick={() => numbersOnClick(7)}>7</button>
							<button className="calculatorBTN">8</button>
							<button className="calculatorBTN">9</button>
							<button className="calculatorBTN">÷</button>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<button className="calculatorBTN">4</button>
							<button className="calculatorBTN">5</button>
							<button className="calculatorBTN">6</button>
							<button className="calculatorBTN">X</button>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<button className="calculatorBTN">1</button>
							<button className="calculatorBTN">2</button>
							<button className="calculatorBTN">3</button>
							<button className="calculatorBTN">-</button>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<button className="calculatorBTN">0</button>
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
