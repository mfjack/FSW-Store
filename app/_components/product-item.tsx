import { Product } from "@prisma/client";
import Image from "next/image";
import { ProductWithTotalPrice } from "../_helpers/product";
import { Badge } from "./ui/badge";
import { ArrowDown } from "lucide-react";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="relative flex h-[10.625rem] w-full items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            alt={product.name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[60%] w-auto max-w-[70%] object-contain"
          />

          {product.discountPercentage > 0 && (
            <Badge className="absolute left-2 top-2 px-2">
              <ArrowDown size={14} />
              {product.discountPercentage}%
            </Badge>
          )}
        </div>

        <div>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
            {product.name}
          </p>
          <div className="flex items-center gap-3">
            {product.discountPercentage > 0 ? (
              <>
                <p className="text-smfont-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                  R$ {product.totalPrice.toFixed(2)}
                </p>
                <p className="overflow-hidden text-ellipsis whitespace-nowrap text-xs line-through opacity-75">
                  R$ {Number(product.basePrice).toFixed(2)}
                </p>
              </>
            ) : (
              <p className="overflow-hidden text-ellipsis whitespace-nowrap text-xs line-through opacity-75">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
