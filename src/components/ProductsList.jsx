import React, { useState, useEffect } from "react";
import ProductCards from "./ProductCards";

const ProductsList = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const getProducts = async () => {
			const response = await fetch("https://fakestoreapi.com/products");
			const jsonData = await response.json();
			setProducts(jsonData);
		};
		getProducts();
	}, []);
	return (
		<div className="grid grid-cols-4 m-10 justify-center items-center">
			{products?.map((prod) => (
				<ProductCards prod={prod} key={prod?.id} />
			))}
		</div>
	);
};

export default ProductsList;
