import Link from "next/link";
import { CartButton } from "../cart/cart-button";
import { LoginAreaButton } from "../login-area/login-area-button";
import { cookies } from "next/headers";

export const Header = async () => {
  const cokieStore = await cookies();
  const token = cokieStore.get('token');

  return (
    <header className="container mx-auto flex my-4 p-5 items-center justify-between bg-white/10 backdrop-blur-md border border-white/20 rounded-md">
      <Link href="/">
        <div className="flex items-center gap-3 text-2xl font-bold font-sans text-green-500 hover:text-green-500 transition-colors">
          <img 
            src="/pizzas/logo-napoles.png" 
            alt="Logo Napoles Pizzaria" 
            className="w-12 h-12 object-contain"
          />
          <span className="hidden sm:inline">Napoles Pizzaria</span>
        </div>
      </Link>
      <div className="flex gap-2">
        <LoginAreaButton initialState={token ? true : false} />
        <CartButton />
      </div>
    </header>
  );
};