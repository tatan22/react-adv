import { ProductButtons } from "../components/ProductButton";
import { ProductCard } from "../components/ProductCard";
import { ProductImage } from "../components/ProductImage";
import { ProductTitle } from "../components/ProductTitle";
import "../styles/custom-styles.css";

const products = {
	id: "1",
	title: "Coffee Mug - Card",
	img: "coffee-mug.png",
};

export const ShoppingPage = () => {
	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
				}}
			>
				<ProductCard product={products} className="bg-dark text-white">
					<ProductCard.Image className="custom-image" />
					<ProductCard.Title  className="text-bold"/>
					<ProductCard.Buttons className="custom-buttons"/>
				</ProductCard>

				{/* Combinación  de los dos anteriores */}
				<ProductCard product={products} className="bg-dark text-white">
					<ProductImage className="custom-image" style={{boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)'}}/>
					<ProductTitle className="text-bold" />
					<ProductButtons className="custom-buttons" />
				</ProductCard>
			</div>

				{/* Con uso de style*/}
				<ProductCard product={products} style={{ backgroundColor: "#70D1F8"}} >
					<ProductImage style={{
						boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)'
					}} />
					<ProductTitle style={{
						fontWeight:'bold'
					}} />
					<ProductButtons  style={{
						display:'flex',
						justifyContent:'end',
					}}/>
				</ProductCard>
			</div>
		
	);
};
