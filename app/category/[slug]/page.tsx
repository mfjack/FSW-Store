import ProductItem from "@/app/_components/product-item";
import { Badge } from "@/app/_components/ui/badge";
import { CATEGORY_ICON } from "@/app/_constants/category-icon";
import { computeProductTotalPrice } from "@/app/_helpers/product";
import { db } from "@/app/_lib/prisma";

const CategoryProducts = async ({ params }: any) => {
  const category = await db.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: true,
    },
  });

  if (!category) {
    return null;
  }

  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge
        className="w-fit gap-2 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
        {category.name}
      </Badge>

      <div className="grid grid-cols-2 gap-3">
        {category.products.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
