import { JSX, JSXElementConstructor, ReactElement } from "react";

export interface ProductCardProps {
	product: Product;
	children?: ReactElement | ReactElement[];
}

export interface Product {
	id: string;
	title: string;
	img?: string;
}

export interface ProductContextProps {
	counter: number;
	increaseBy: (value?: number) => void;
	product: Product;
}
export interface ProductCardHOCProps {
	({ children, product }: ProductCardProps): JSX.Element;
	Button: () => JSX.Element
	Image: ({ img }: { img?: string | undefined }) => JSX.Element;
	Title: ({ title }: {
    title?: string | undefined;
}) => ReactElement<unknown, string | JSXElementConstructor<any>>
}
