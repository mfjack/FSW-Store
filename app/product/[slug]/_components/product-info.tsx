"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { ProductWithTotalPrice } from "@/app/_helpers/product";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  TruckIcon,
} from "lucide-react";
import { useState } from "react";

interface ProductInfoProps {
  product: Pick<
    ProductWithTotalPrice,
    "basePrice" | "discountPercentage" | "totalPrice" | "description" | "name"
  >;
}

const ProductInfo = ({
  product: { basePrice, discountPercentage, totalPrice, description, name },
}: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => prev - 1);

    if (quantity === 1) {
      setQuantity(1);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col px-5">
      <h1 className="text-lg">{name}</h1>

      <div className="flex items-center gap-3">
        <h2 className="text-xl font-bold">R$ {totalPrice.toFixed(2)}</h2>
        {discountPercentage > 0 && (
          <Badge className="px-2 py-[2px]">
            <ArrowDownIcon size={14} />
            {discountPercentage}%
          </Badge>
        )}
      </div>
      {discountPercentage > 0 && (
        <p className="text-xs font-semibold line-through opacity-75">
          R$ {Number(basePrice).toFixed(2)}
        </p>
      )}

      <div className="mt-4 flex items-center gap-3">
        <Button size="icon" variant="outline" onClick={handleDecreaseQuantity}>
          <ArrowLeftIcon size={16} />
        </Button>

        <span>{quantity}</span>

        <Button size="icon" variant="outline" onClick={handleIncreaseQuantity}>
          <ArrowRightIcon size={16} />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <h3 className="font-bold">Descrição</h3>
        <p className="text-justify text-sm opacity-60">{description}</p>
      </div>

      <Button className="mt-8 font-bold uppercase">
        Adicionar ao carrinho
      </Button>

      <div className="mt-6 flex items-center justify-between rounded-lg bg-accent px-5 py-6">
        <div className="flex items-center gap-3">
          <TruckIcon />
          <div className="flex flex-col">
            <p className="text-xs">
              Entrega via <span className="font-bold">Packet</span>
              <p className="text-xs text-[#8162ff]">
                Envio para <span className="font-bold">todo Brasil</span>
              </p>
            </p>
          </div>
        </div>

        <p className="text-xs font-bold">Frete Grátis</p>
      </div>
    </div>
  );
};

export default ProductInfo;
