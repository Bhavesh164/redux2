import React,{useEffect} from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
const ProductLisiting = () => {
	// in order to get the access of redux store
	const  products = useSelector((state)=>state);
	const fetchProducts = async() => {
	const response = await axios
	.get("https://fakestoreapi.com/products")
	.catch((err) => {
		console.log("error",err);
	});
	console.log(response);
	};
	console.log(products);
	useEffect(()=>{
		fetchProducts();
	},[]);
	return (
	<div className="ui grid container">
			<ProductComponent />
	</div>
	);
};

export default ProductLisiting;
