import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductButtons } from "./ProductButton";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductCardHOCProps } from "../interfaces/interfaces";

const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Button: ProductButtons,
  Image: ProductImage,
  Title: ProductTitle,
});

export default ProductCard;
