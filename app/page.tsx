import Image from "next/image";

const Home = () => {
  return (
    <div className="p-5">
      <Image
        src="/banner-01.svg"
        alt="até 55% de desconto só esse mês"
        width={0}
        height={0}
        className="h-full w-full"
      />
    </div>
  );
};

export default Home;
