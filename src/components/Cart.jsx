import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItems } from "./redux/cartSlice";

const Cart = () => {
	const productsCart = useSelector((state) => state.cart);

	const dispatch = useDispatch();

	const removeItem = (id) => {
		dispatch(removeItems(id));
	};

	return (
		<div className="grid grid-cols-4">
			{productsCart?.map((product) => (
				<div className="m-5 p-5 shadow-md border-2 border-gray-400">
					<img src={product.image} alt={product.id} className="w-48 h-48" />
					<h1 className="font-bold py-2 font-serif">{product.title}</h1>
					<p className="text-blue-800 text-xl font-semibold py-2">
						₹ {product.price.toFixed(2)}
					</p>
					<span className="px-3 bg-green-700 font-medium inline-block  text-white">
						{product.rating?.rate}
					</span>
					<br />

					<button
						onClick={() => removeItem(product.id)}
						className="py-2 px-3 bg-red-600 mt-3 text-center font-bold rounded-md text-white">
						Remove
					</button>
				</div>
			))}
		</div>
	);
};

export default Cart;
