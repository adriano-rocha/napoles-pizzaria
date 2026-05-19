"use client"

import { useCart } from "@/stores/cart"
import { Button } from "../ui/button"

export const  CartButton = () => {
    const cart = useCart();

    return (
        <Button className="bg-green-700 hover:bg-green-500 cursor-pointer" onClick={() => cart.setOpen(true)}>Carrinho</Button>
    )
}