import { useCallback, useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductContext";

export interface Props {
	// className para poder recibir estilos personalizados
	className?: string;
	style?: React.CSSProperties;
	activeBtnClass?: string;
}

export const ProductButtons = ({ className, style }: Props) => {

	const { increaseBy, counter, maxCount } = useContext(ProductContext);

//TODO: Una función isMaxReached = useCallback, dependencias [counter, maxCounter]
//? True si el count === maxCount, caso contrario False

const isMaxReached = useCallback(
	() => !!maxCount && counter === maxCount, // retorna true o false
	[counter, maxCount],
)

	return (
		<div className={`	${styles.buttonsContainer} ${className}`} style={style}>
			<button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
				-
			</button>
			<div className={styles.countLabel}>{counter}</div>

			<button className={`${styles.buttonAdd} ${ isMaxReached() && styles.disabled}`} onClick={() => increaseBy(1)}>
				+
			</button>
		</div>
	);
};
