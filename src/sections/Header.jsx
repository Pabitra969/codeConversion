import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="flex justify-around max-lg:justify-between">
			<div id="logo">
				<Link to="/home">
					<img
						src="/vite.svg"
						alt=""
						className="size-14 mt-5 ml-20 z-100 hover:cursor-pointer "
					/>
				</Link>
			</div>

			<div className="relative mt-8 ">
				<ul className="flex text-[#ffffff] justify-between max-lg:hidden gap-x-36 uppercase text-[20px] base-bold">
					<li className="hover-header">
						<Link to="/home">Home</Link>
					</li>
					<li className="hover-header">
						<Link to="/convert">Convertion</Link>
					</li>
					<li className="hover-header">
						<Link to="/about">About us </Link>
					</li>
					<li className="hover-header">
						<Link to="/contact">Contatc Us</Link>
					</li>
				</ul>
			</div>

			<div id="login" className="mr-20 max-lg:hidden mt-6">
				<Button> Login </Button>
			</div>
		</div>
	);
};

export default Header;
