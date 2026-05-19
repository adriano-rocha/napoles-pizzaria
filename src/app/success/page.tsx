import { Header } from "@/components/layout/header";
import { stripe } from "@/lib/stripe"; 
import { redirect } from "next/navigation";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Page({ searchParams }: Props) {
  const sessionId = (await searchParams).session_id as string;

  if(!sessionId) return redirect('/');

  const paymentSession = await stripe.checkout.sessions.retrieve(sessionId);
  if(!paymentSession) return redirect('/');
  const customerEmail = paymentSession.customer_details?.email;

  return (
    <div>
      <Header />
      <main className="container mx-auto mb-10 mt-10 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h1 className="text-2xl font-bold text-green-500">
            Compra realizada com sucesso!
          </h1>
          <h3 className="text-xl text-gray-200">
            Em breve enviaremos um e-mail para <strong>{customerEmail}</strong> com mais
            informações.
          </h3>
        </div>
      </main>
    </div>
  );
}
