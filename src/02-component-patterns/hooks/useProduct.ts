import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
	product: Product;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
}

export const useProduct = ({
	onChange,
	product,
	value = 0,
}: useProductArgs) => {

	const [counter, setCounter] = useState(value);

	const isControlled = useRef(!!onChange); // Con la doble negación convertimos a booleano
	// Para obtener el valor por de la referencia se usa isControlled.current

	const increaseBy = (value: number = 1) => {

		if (isControlled.current) {
			return onChange!({ count: value, product });
		}

		const newCount = Math.max(counter + value, 0);
		setCounter((prev) => Math.max(prev + value, 0));

		onChange && onChange({ count: newCount, product });
	};

	useEffect(() => {
		setCounter(value);
	}, [value]);

	return {
		//Props
		counter,
		//Methods
		increaseBy,
	};
};
