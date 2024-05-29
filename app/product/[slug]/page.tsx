import { db } from "@/app/_lib/prisma";
import ProductImage from "./_components/product-image";
import ProductInfo from "./_components/product-info";
import { computeProductTotalPrice } from "@/app/_helpers/product";

interface ProductDetailsPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailsPage = async ({
  params: { slug },
}: ProductDetailsPageProps) => {
  const product = await db.product.findFirst({
    where: {
      slug: slug,
    },
  });

  if (!product) {
    return null;
  }

  return (
    <>
      <ProductImage imageUrls={product.imageUrls} name={product.name} />
      <ProductInfo product={computeProductTotalPrice(product)} />
    </>
  );
};

export default ProductDetailsPage;
