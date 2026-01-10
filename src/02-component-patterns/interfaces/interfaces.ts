import { JSX, JSXElementConstructor, ReactElement } from "react";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductButtonsProps } from "../components/ProductButton";
import { products } from '../data/products';

export interface Product {
	id: string;
	title: string;
	img?: string;
}

export interface ProductContextProps {
	counter: number;
	maxCount?: number;
	product: Product;
	increaseBy: (value?: number) => void;
}

export interface ProductCardHOCProps {
	({ children, product }: ProductCardProps): JSX.Element;
	Image: (Props: ProductImageProps) => JSX.Element;
	Button: (Props: ProductButtonsProps) => JSX.Element;
	Title: (
		Props: ProductTitleProps
	) => ReactElement<unknown, string | JSXElementConstructor<any>>;
}

export interface onChangeArgs {
	product: Product;
	count: number;
}

export interface ProductsInCart extends Product {
	count: number;
}
export interface InitialValues {
	count?: number;
	maxCount?: number;
}

export interface ProductCardHandlers {
	count: number;
	isMaxCountReached: boolean;
	maxCount?: number;
	product: Product;
	increaseBy: (value: number) => void;
	reset: () => void;
}