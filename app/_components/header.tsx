"use client";

import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Header = () => {
  const { data, status } = useSession();

  const handleLoginClick = () => {
    signIn();
  };

  const handleLogoutClick = () => {
    signOut();
  };

  return (
    <>
      <Card className="flex items-center justify-between p-[1.875rem]">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader className="text-left text-lg font-semibold">
              Menu
            </SheetHeader>

            {status === "authenticated" && (
              <div className="mt-6 flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>{data?.user?.name?.[0]}</AvatarFallback>
                  {data.user?.image && (
                    <AvatarImage
                      src={data?.user?.image as string | undefined}
                      alt={data?.user?.name as string | undefined}
                    />
                  )}
                </Avatar>

                <div>
                  <h3>{data?.user?.name}</h3>
                  <span>{data?.user?.email}</span>
                </div>
              </div>
            )}

            {status === "authenticated" ? (
              <>
                <Button
                  onClick={handleLogoutClick}
                  variant="outline"
                  className="mt-6 w-full justify-start gap-3"
                >
                  <LogInIcon size={16} />
                  Sair
                </Button>
              </>
            ) : (
              <div>
                <h3 className="mt-6">Olá, seja bem-vindo</h3>
                <Button
                  onClick={handleLoginClick}
                  variant="outline"
                  className="mt-6 w-full justify-start gap-3"
                >
                  <LogInIcon size={16} />
                  Entrar
                </Button>
              </div>
            )}

            <div className="mt-2 flex flex-col gap-2">
              <Button variant="outline" className="w-full justify-start gap-3">
                <PercentIcon size={16} />
                Ofertas
              </Button>

              <Button variant="outline" className="w-full justify-start gap-3">
                <ListOrderedIcon size={16} />
                Catálogo
              </Button>
            </div>
          </SheetContent>
        </Sheet>

        <h1 className="text-xl font-semibold text-primary">Store</h1>

        <Button size="icon" variant="outline">
          <ShoppingCartIcon />
        </Button>
      </Card>
    </>
  );
};

export default Header;
