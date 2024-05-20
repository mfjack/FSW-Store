import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const Header = () => {
  return (
    <div>
      <Card className="flex items-center justify-between p-[1.875rem]">
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>

        <h1 className="text-lg font-semibold text-primary">Store</h1>

        <Button size="icon" variant="outline">
          <ShoppingCartIcon />
        </Button>
      </Card>
    </div>
  );
};

export default Header;