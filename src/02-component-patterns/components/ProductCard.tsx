import { useProduct } from "../hooks/useProduct";
import {
	Product
} from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductButtons } from "./ProductButton";
import { ProductContext } from "./ProductContext";
import { ReactElement } from "react";

const { Provider } = ProductContext;

export interface Props {
	product: Product;
	children?: ReactElement | ReactElement[];
	className?: string;
	style?: React.CSSProperties;
}


export const ProductCard = ({ children, product, className, style }: Props) => {
	const { counter, increaseBy } = useProduct();
	return (
		<Provider value={{ counter, increaseBy, product }}>
			<div 
				className={`${styles.productCard} ${className}`}
				style={style}>
					{children}
			</div>
		</Provider>
	);
};

ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons;
