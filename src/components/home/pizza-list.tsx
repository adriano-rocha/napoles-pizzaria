"use client";

import { Product } from "@/generated/prisma";
import { PizzaItem } from "./pizza-item";
import { useProducts } from "@/stores/products";
import { useEffect, useMemo, useState } from "react";

type Props = {
  pizzas: Product[];
};

const CATEGORY_ORDER = [
  "Pizza Salgada",
  "Pizza Doce",
  "Refrigerantes",
  "Sucos",
  "Águas",
  "Cervejas",
  "Vinhos",
];

const CATEGORY_CONFIG: Record<string, { icon: string; description: string }> = {
  "Pizza Salgada": { icon: "🍕", description: "Tradicionais e especiais" },
  "Pizza Doce":    { icon: "🍰", description: "Para adoçar o momento" },
  "Refrigerantes": { icon: "🥤", description: "Gelados e refrescantes" },
  "Sucos":         { icon: "🧃", description: "Naturais e saborosos" },
  "Águas":         { icon: "💧", description: "Mineral com ou sem gás" },
  "Cervejas":      { icon: "🍺", description: "Nacionais e importadas" },
  "Vinhos":        { icon: "🍷", description: "Seleção especial" },
};

export const PizzaList = ({ pizzas }: Props) => {
  const products = useProducts();
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  useEffect(() => {
    products.setProducts(pizzas);
  }, []);

  const grouped = useMemo(() => {
    const map: Record<string, Product[]> = {};
    for (const cat of CATEGORY_ORDER) map[cat] = [];
    for (const p of pizzas) {
      const cat = p.category ?? "";
      if (map[cat]) map[cat].push(p);
    }
    for (const cat of CATEGORY_ORDER) map[cat].sort((a, b) => a.id - b.id);
    return map;
  }, [pizzas]);

  const presentCategories = CATEGORY_ORDER.filter(
    (cat) => grouped[cat]?.length > 0
  );

  const handleToggle = (cat: string) => {
    setOpenCategory((prev) => (prev === cat ? null : cat));
  };

  return (
    <div className="flex flex-col gap-4">
      {presentCategories.map((cat) => {
        const config = CATEGORY_CONFIG[cat];
        const isOpen = openCategory === cat;
        const count = grouped[cat].length;

        return (
          <div key={cat}>
            {/* Category card button */}
            <button
              onClick={() => handleToggle(cat)}
              className="w-full text-left bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/40 rounded-md p-4 transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{config.icon}</span>
                  <div>
                    <div className="text-white font-bold text-lg">{cat}</div>
                    <div className="text-white/60 text-sm">{config.description} · {count} {count === 1 ? "item" : "itens"}</div>
                  </div>
                </div>
                <span className={`text-white/70 text-xl transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                  ▾
                </span>
              </div>
            </button>

            {/* Expanded products */}
            {isOpen && (
              <div className="mt-3 grid grid-cols-2 lg:grid-cols-4 gap-4">
                {grouped[cat].map((item) => (
                  <PizzaItem key={item.id} data={item} />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};