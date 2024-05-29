import ProductItem from "@/app/_components/product-item";
import { computeProductTotalPrice } from "@/app/_helpers/product";
import { Product } from "@prisma/client";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex w-full overflow-x-auto [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <div className="w-[10.625rem] max-w-[10.625rem] pl-5" key={product.id}>
          <ProductItem product={computeProductTotalPrice(product)} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
