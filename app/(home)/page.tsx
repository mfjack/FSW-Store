import Image from "next/image";
import Categories from "./_components/categories";
import ProductList from "./_components/product-list";
import { db } from "../_lib/prisma";

const Home = async () => {
  const deals = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <div>
      <Image
        src="/banner-01.svg"
        alt="até 55% de desconto só esse mês"
        width={0}
        height={0}
        className="h-full w-full px-5"
      />

      <div className="mt-6 px-5">
        <Categories />
      </div>

      <div className="mt-6">
        <ProductList products={deals} />
      </div>
    </div>
  );
};

export default Home;
