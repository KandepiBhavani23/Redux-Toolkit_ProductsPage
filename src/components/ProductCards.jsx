import React from "react";
import { useDispatch } from "react-redux";
import { addItems } from "./redux/cartSlice";

const ProductCards = ({ prod }) => {
	const { image, title, price, rating, id } = prod;

	const dispatch = useDispatch();
	const addProduct = (prod) => {
		dispatch(addItems(prod));
	};

	return (
		<div className="m-5 p-5 shadow-md border-2 border-gray-400">
			<img src={image} alt={id} className="w-48 h-48" />
			<h1 className="font-bold py-2 font-serif">{title}</h1>
			<p className="text-blue-800 text-xl font-semibold py-2">
				₹ {price.toFixed(2)}
			</p>
			<span className="px-3 bg-green-700 font-medium inline-block  text-white">
				{rating?.rate}
			</span>
			<br />

			<button
				onClick={() => addProduct(prod)}
				className="py-2 px-3 bg-blue-600 mt-3 text-center rounded-md text-white">
				Add to Cart
			</button>
		</div>
	);
};

export default ProductCards;
