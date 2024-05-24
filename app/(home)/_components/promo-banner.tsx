import Image from "next/image";

interface PromoBannerProps {
  src: string;
  alt: string;
}

const PromoBanner = ({ src, alt }: PromoBannerProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      className="h-full w-full px-5"
    />
  );
};

export default PromoBanner;
