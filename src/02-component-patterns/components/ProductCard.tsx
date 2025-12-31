import { useProduct } from "../hooks/useProduct";
import {
	ProductCardProps
} from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductButtons } from "./ProductButton";
import { ProductContext } from "./ProductContext";

const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
	const { counter, increaseBy } = useProduct();
	return (
		<Provider value={{ counter, increaseBy, product }}>
			<div className={styles.productCard}>{children}</div>
		</Provider>
	);
};

ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons;
