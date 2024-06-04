import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";
import AuthProvider from "./_providers/next-auth";
import Footer from "./_components/footer";
import CartProvider from "./_providers/cart";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "FSW Store",
  description: "Loja de periféricos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <div className="flex h-full flex-col">
          <AuthProvider>
            <CartProvider>
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
            </CartProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
