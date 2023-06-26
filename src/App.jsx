import "./App.css";
import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import {
	ProductsList,
	Navbar,
	Footer,
	PageNotFound,
	Cart,
} from "./components/index";

const AppLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <AppLayout />,
			children: [
				{
					path: "/",
					element: <ProductsList />,
				},
				{
					path: "/cart",
					element: <Cart />,
				},
			],
		},
		{
			path: "*",
			element: <PageNotFound />,
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
