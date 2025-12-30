import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/ProductCard";

const products = {
	id: "1",
	title: "Coffee Mug - Card",
	img: "coffee-mug.png",
}

export const ShoppingPage = () => {
	return (
		<div>
			<h1>Shopping Store</h1>
      <hr/>
			<div style={{ 
				display: "flex",
				flexDirection: "row",
				flexWrap: "wrap"
			}}>

      	<ProductCard product={products}>
					<ProductImage img={products.img} />
					<ProductTitle title={products.title} />
					<ProductButtons  />
				</ProductCard>

			{/* Otras forma común de verlo */}
      	<ProductCard product={products}>
					<ProductCard.Image img={products.img} />
					<ProductCard.Title title={'Title Second method'} />
					<ProductCard.Buttons  />
				</ProductCard>

			{/* Combinación  de los dos anteriores */}
      	<ProductCard product={products}>
					<ProductImage img={products.img} />
					<ProductTitle title={'Title Second method'} />
					<ProductButtons  />
				</ProductCard>
			</div>
		</div>
	);
};
