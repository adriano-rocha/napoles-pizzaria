"use client";

import { Product } from "@/generated/prisma";
import Image from "next/image";
import { Button } from "../ui/button";
import { decimalToMoney } from "@/lib/utils";
import { useCart } from "@/stores/cart";

type Props = {
  data: Product;
};

export const PizzaItem = ({ data }: Props) => {
  const cart = useCart();

  const handleAddToCart = () => {
    cart.addItem({
      productId: data.id,
      quantity: 1,
    });
    cart.setOpen(true);
  };

  return (
    <div className="text-sm bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-md hover:bg-white/20 transition-all">
      <Image
        src={data.image}
        alt={data.name}
        width={200}
        height={200}
        className="w-full mb-3 rounded-md"
      />

      <div className="text-lg font-bold text-white">{data.name}</div>
      <div className="text-white font-semibold">{decimalToMoney(data.price)}</div>
      <div className="truncate mb-3 text-gray-200">{data.ingredients}</div>
      <div className="text-center">
        <Button 
          className="bg-sky-600/90 hover:bg-sky-500 cursor-pointer w-full backdrop-blur-sm"
          onClick={handleAddToCart}
        >
          Adicionar ao carrinho
        </Button>
      </div>
    </div>
  );
};