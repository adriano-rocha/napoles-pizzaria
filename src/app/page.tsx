import { PizzaList } from "@/components/home/pizza-list";
import { Header } from "@/components/layout/header";
import About from "@/components/home/about";
import Footer from "@/components/layout/footer";
import { api } from "@/lib/axios";

export default async function Page() {
  const pizzaReq = await api.get("/pizzas");
  const pizzas = pizzaReq.data.pizzas ?? [];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <About />
      <main className="container mx-auto mb-10">
        <PizzaList pizzas={pizzas} />
      </main>
      <Footer />
    </div>
  );
}