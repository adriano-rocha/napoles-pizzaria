import { stripe } from "@/lib/stripe";
import { getloggerdUserfromHeader } from "@/services/auth";
import { createNewOrder } from "@/services/order";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const headersList = await headers();
  const origin = headersList.get("origin");

  const { cart } = await request.json();
  const loggedUser = await getloggerdUserfromHeader();

  if (!loggedUser) return NextResponse.json({ error: "Usuário não logado" });
  if (!cart || (cart && cart.length <= 0))
    return NextResponse.json({ error: "Carrinho vazio" });

  const order = await createNewOrder(loggedUser.id, cart);
  if (!order) return NextResponse.json({ error: "Ocorreu um erro" });

  const paymentItems = [];
  for(let item of order.OrderProducts)  {
    paymentItems.push({
      price_data: {
        currency: 'brl',
        unit_amount: Math.round(Number(item.product.price) * 100),
        product_data: {
          name: item.product.name
        }
      },
      quantity: item.quantity
    })
  }

  // method pay
  const paymentSession = await stripe.checkout.sessions.create({
    mode: "payment",
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}`,
    line_items: paymentItems,
    customer_email: loggedUser.email,
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          display_name: 'Frete Padrão',
          fixed_amount: {
            currency: 'brl',
            amount: 1000
          }
        }
      }
    ],
    metadata: {
      order_id: order.id.toString()
    }
  });

  return NextResponse.json({ order, url: paymentSession.url }, { status: 201 });
}
