import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<div className="container-fluid calculatorShape">
		<div className="row">
			<div className="col border border-primary">
				<div className="border border-warning w-1oo">
					<h2>Aqui ira el input</h2>
				</div>
				<div className="row">
					<div className="col">
						<button className="calculatorBTN">7</button>
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
						<button className="clearBTN">C</button>
					</div>
				</div>
			</div>
		</div>
	</div>
);
