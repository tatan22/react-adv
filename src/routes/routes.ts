import { JSX, lazy, LazyExoticComponent } from "react";
// import { LazyPages1, LazyPages2, LazyPages3 } from "../01-Lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
	to: string;
	path: string;
	Component: LazyExoticComponent<JSXComponent> | JSXComponent;
	name: string;
}

// Para trabajar con lazy load los componentes deben ser exportados pro default
const lazy1 = lazy(() => import("../01-Lazyload/pages/LazyPages1"));
const lazy2 = lazy(() => import("../01-Lazyload/pages/LazyPages2"));
const lazy3 = lazy(() => import("../01-Lazyload/pages/LazyPages3"));

export const routes: Route[] = [
	{
		to: "/lazy1",
		path: "/lazy1",
		Component: lazy1,
		name: "Lazy-1",
	},
	{
		to: "/lazy2",
		path: "/lazy2",
		Component: lazy2,
		name: "Lazy-2",
	},
	{
		to: "/lazy3",
		path: "/lazy3",
		Component: lazy3,
		name: "Lazy-3",
	},
];
