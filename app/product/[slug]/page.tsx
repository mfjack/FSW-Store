import { db } from "@/app/_lib/prisma";
import ProductImage from "./_components/product-image";

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
    </>
  );
};

export default ProductDetailsPage;
