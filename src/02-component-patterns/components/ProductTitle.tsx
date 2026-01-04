import { ReactElement, useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductContext";

export interface Props {
	title?: string;
	className?: string;
	style?: React.CSSProperties;
}

// export const ProductTitle = ({ title, className }: { title?: string, className?: string }): ReactElement => {
export const ProductTitle = ({ title, className, style }: Props): ReactElement => {
	const { product } = useContext(ProductContext);

	return (
		<span className={`${styles.productTitle} ${className}`} style={style}>
			{title || product.title}
		</span>
	);
};


