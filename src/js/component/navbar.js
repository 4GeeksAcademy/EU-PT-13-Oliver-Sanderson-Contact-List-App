import React from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "./errorMessage";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-secondary bg-secondary mb-3">
				<span className="navbar-brand ms-3 h1">Contact List</span>
				<div class="dropdown">
					<button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuAgenda" data-bs-toggle="dropdown" aria-expanded="false">
						Select Agenda
					</button>
					<ul class="dropdown-menu" aria-labelledby="dropdownMenuAgenda">
						<li><a class="dropdown-item" href="#">Action</a></li>
						<li><a class="dropdown-item" href="#">Another action</a></li>
						<li><a class="dropdown-item" href="#">Something else here</a></li>
					</ul>
				</div>

				<ErrorMessage />

		</nav>
	);
};
