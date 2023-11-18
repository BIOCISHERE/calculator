import React from "react";
import { Link } from "react-router-dom";
import { FaCalculator } from "react-icons/fa";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><FaCalculator className="m-1" />Basic Calculator</span>
			</Link>
		</nav>
	);
};
