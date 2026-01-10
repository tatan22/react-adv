import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products";

import "../styles/custom-styles.css";

const product = products[0];

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
				<ProductCard
					product={product}
					className="bg-dark text-white"
					initialValues={{
						count: 4,
						maxCount: 10,
					}}
				>
					{({ reset, count, increaseBy, isMaxCountReached }) => (
						<>
							<ProductCard.Image className="custom-image" />
							<ProductCard.Title className="text-bold" />
							<ProductCard.Buttons
								className="custom-buttons"
								style={{
									display: "flex",
									justifyContent: "center",
								}}
							/>
							<button onClick={reset}>Reset</button>
							<button onClick={() => increaseBy(-2)}>-2</button>
							{/* Si se llega  al isMaxCount, debemos  ocultar el botón */}
							{/* <button onClick={() => increaseBy(2)} disabled={ isMaxCountReached} >2</button> */}
							{!isMaxCountReached && (
								<button onClick={() => increaseBy(2)}>+2</button>
							)}
							<span>count: {count}</span>
						</>
					)}
				</ProductCard>
			</div>
		</div>
	);
};
