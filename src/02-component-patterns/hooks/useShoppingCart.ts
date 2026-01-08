import { useState } from "react";
import { onChangeArgs, ProductsInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  
	const [shoppingCart, setShoppingCart] = useState<{
		[key: string]: ProductsInCart;
	}>({});

	const onProductCountChange = ({ count, product }: onChangeArgs) => {
		setShoppingCart((oldShoppingCart) => {
			console.log(count);
			// Verificar si tengo un producto
			const productInCart: ProductsInCart = oldShoppingCart[product.id] || {
				...product,
				count: 0,
			};

			if (Math.max(productInCart.count + count, 0) > 0) {
				const updatedProduct: ProductsInCart = {
					...productInCart,
					count: productInCart.count + count,
				};
				return {
					...oldShoppingCart,
					[product.id]: updatedProduct,
				};
			}

			// Borrar el producto del carrito
			const { [product.id]: toDelete, ...rest } = oldShoppingCart;
			return {
				...rest,
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
