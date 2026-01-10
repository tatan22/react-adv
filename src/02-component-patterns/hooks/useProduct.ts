import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
	product: Product;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
	initialValues?: InitialValues;
}

export const useProduct = ({
	onChange,
	product,
	value = 0,
	initialValues,
}: useProductArgs) => {
	// if (initialValues) {
	// 	value = initialValues.count || value;
	// }

	const [counter, setCounter] = useState<number>(initialValues?.count || value);

	const isMounted = useRef(false);

	const increaseBy = (value?: number) => {
		const amount = value ?? 1;
		let newValue = Math.max(counter + amount, 0);

		if (initialValues?.maxCount) {
			newValue = Math.min(newValue, initialValues.maxCount);
		}

		setCounter(newValue);

		onChange && onChange({ count: newValue, product });
	};

	const reset = () => {
		const newValue = initialValues?.count || value;
		setCounter(newValue);
		onChange && onChange({ count: newValue, product });

	}

	// El use ref se puede usar como un elemento que no tiene dependencias de renderizado
	useEffect(() => {
		if (!isMounted.current) return;
		setCounter(value);
	}, [value]);

	useEffect(() => {
		isMounted.current = true;
	}, []);

	return {
		//Props
		counter,
		maxCount: initialValues?.maxCount,
		//Methods
		increaseBy,
		isMaxCountReached: !!initialValues?.maxCount && counter === initialValues.maxCount,
		reset
	};
};
