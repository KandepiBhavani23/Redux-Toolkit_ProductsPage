import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
	const cartItems = useSelector((store) => store.cart);

	return (
		<div className="flex items-center list-none shadow-md">
			<img
				src="https://img.freepik.com/free-vector/supermarket-logo-template-theme_23-2148452347.jpg"
				alt="logo image"
				className="w-16 object-contain"
			/>
			<Link to="/" className="ml-5 ">
				<li className="text-xl t">Products</li>
			</Link>

			<Link to="/cart" className="right-0 ml-auto mr-11">
				<li className="text-xl">Cart - {cartItems.length}</li>
			</Link>
		</div>
	);
};

export default Navbar;
