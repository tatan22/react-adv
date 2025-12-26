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
const lazyLayout = lazy(() => import("../01-Lazyload/layout/LazyLayout"));
const noLazy = lazy(() => import("../01-Lazyload/pages/NoLazy"));

export const routes: Route[] = [
	{
		/*
		 * se debe especificar el path de la ruta y el componente que
		 * se va a mostrar para la version 6 de react router dom
		 */
		path: "/lazyload/*",
		to: "/lazyload",
		Component: lazyLayout,
		name: "LazyLayout",
	},
	{
		to: "/no-lazy",
		path: "/no-lazy",
		Component: noLazy,
		name: "No-Lazy",
	},
];
