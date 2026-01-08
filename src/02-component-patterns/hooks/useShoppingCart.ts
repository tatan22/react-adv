import { useState } from "react";
import { onChangeArgs, ProductsInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
	const [shoppingCart, setShoppingCart] = useState<{
		[key: string]: ProductsInCart;
	}>({});

	const onProductCountChange = ({ count, product }: onChangeArgs) => {
    console.log(count);
		setShoppingCart((oldShoppingCart) => {
			if (count === 0) {
				const { [product.id]: toRemove, ...rest } = oldShoppingCart;
				return rest;
			}
			return {
				...oldShoppingCart,
				[product.id]: { ...product, count },
			};
		});
	};

	return {
		// Props
		shoppingCart,
		// Methods
		onProductCountChange,
	};
};
