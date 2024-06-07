import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { useContext } from "react";
import { CartContext } from "../_providers/cart";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "../_helpers/product";

const Cart = () => {
  const { products, subTotal, totalDiscount, total } = useContext(CartContext);

  return (
    <div className="flex flex-col gap-5">
      <Badge
        className="w-fit gap-2 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      <div className="flex flex-col gap-5">
        {products.length > 0 ? (
          products.map((product) => (
            <CartItem
              key={product.id}
              product={computeProductTotalPrice(product as any) as any}
            />
          ))
        ) : (
          <p className="text-center font-semibold">Seu carrinho esta vazio.</p>
        )}
      </div>

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
      </div>
    </div>
  );
};

export default Cart;
