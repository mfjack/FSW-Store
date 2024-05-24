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
        <p className="mb-2 pl-5 font-bold">OFERTAS</p>
        <ProductList products={deals} />
      </div>

      <Image
        src="/banner-03.svg"
        alt="até 55% de desconto em mouses"
        width={0}
        height={0}
        className="h-full w-full px-5"
      />
    </div>
  );
};

export default Home;
