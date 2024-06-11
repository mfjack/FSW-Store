import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { useContext } from "react";
import { CartContext } from "../_providers/cart";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "../_helpers/product";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";

const Cart = () => {
  const { products, subTotal, totalDiscount, total } = useContext(CartContext);

  return (
    <div className="flex h-full flex-col gap-5">
      <Badge
        className="w-fit gap-2 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      <div className="flex h-full flex-col gap-5 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="flex h-full flex-col gap-4">
            {products.length > 0 ? (
              products.map((product) => (
                <CartItem
                  key={product.id}
                  product={computeProductTotalPrice(product as any) as any}
                />
              ))
            ) : (
              <p className="text-center font-semibold">
                Seu carrinho esta vazio.
              </p>
            )}
          </div>
        </ScrollArea>
      </div>

      {products.length > 0 && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between text-xs">
            <p>Subtotal:</p>
            <p>R$ {subTotal.toFixed(2)}</p>
          </div>
          <div className="flex items-center justify-between text-xs">
            <p>Entrega</p>
            <p>Grátis</p>
          </div>
          <div className="flex items-center justify-between text-xs">
            <p>Total de Desconto:</p>
            <p>R$ {totalDiscount.toFixed(2)}</p>
          </div>
          <div className="flex items-center justify-between text-xs">
            <p>Total:</p>
            <p>R$ {total.toFixed(2)}</p>
          </div>

          <Button className="mt-5 font-bold uppercase">Finalizar </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
