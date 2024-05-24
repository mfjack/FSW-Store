import Image from "next/image";
import Categories from "./_components/categories";
import ProductList from "./_components/product-list";
import { db } from "../_lib/prisma";
import { title } from "process";
import SectionTitle from "./_components/section-title";
import PromoBanner from "./_components/promo-banner";

const Home = async () => {
  const deals = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await db.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  return (
    <div>
      <PromoBanner src="/banner-01.svg" alt="até 55% de desconto só esse mês" />

      <div className="mt-6 px-5">
        <Categories />
      </div>

      <div className="mt-6">
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={deals} />
      </div>

      <PromoBanner src="/banner-03.svg" alt="até 55% de desconto em mouses" />

      <div className="mt-6">
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>
    </div>
  );
};

export default Home;
