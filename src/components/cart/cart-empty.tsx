"use client"

import { useCart } from "@/stores/cart"
import { Button } from "../ui/button"

export const CartEmpty = () => {
    const { setOpen } = useCart();
    return (
        <div className="my-10 text-center">
            <p className="mb-4">Carrinho vazio.</p>
            <Button className="bg-green-700 hover:bg-green-800 " onClick={() => setOpen(false)}>Fechar</Button>
        </div>
    )
}