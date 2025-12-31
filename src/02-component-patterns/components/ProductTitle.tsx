import { ReactElement, useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductContext";


export const ProductTitle = ({ title }: { title?: string }): ReactElement => {
	const { product } = useContext(ProductContext);

	return (
		<span className={styles.productDescription}>{title || product.title}</span>
	);
};


