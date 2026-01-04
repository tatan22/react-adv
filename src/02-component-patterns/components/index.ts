import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductCardHOCProps } from "../interfaces/interfaces";
import { ProductButtons } from "./ProductButton";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
export  { ProductButtons } from "./ProductButton";
export  { ProductImage } from "./ProductImage";
export  { ProductTitle } from "./ProductTitle";

const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Button: ProductButtons,
  Image: ProductImage,
  Title: ProductTitle,
});

export default ProductCard;
