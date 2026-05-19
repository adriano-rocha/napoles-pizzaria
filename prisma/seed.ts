import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Iniciando seed do banco de dados...");

  // Limpar produtos existentes antes de inserir novos
  await prisma.product.deleteMany({});
  console.log("🗑️  Produtos antigos removidos");

  const products = [
    // Pizzas Salgadas
    {
      id: 1,
      name: "Calabresa com Cebola",
      price: 42.9,
      image: "calabresa.jpg",
      ingredients: "Calabresa, cebola, mussarela, molho de tomate",
      category: "Pizza Salgada",
    },
    {
      id: 2,
      name: "Margherita",
      price: 39.9,
      image: "margherita.jpg",
      ingredients: "Mussarela, tomate, manjericão, molho de tomate",
      category: "Pizza Salgada",
    },
    {
      id: 3,
      name: "Quatro Queijos",
      price: 47.5,
      image: "quatro-queijos.jpg",
      ingredients: "Mussarela, parmesão, gorgonzola, provolone, molho de tomate",
      category: "Pizza Salgada",
    },
    {
      id: 4,
      name: "Pepperoni",
      price: 44.9,
      image: "pepperoni.jpg",
      ingredients: "Pepperoni, mussarela, molho de tomate",
      category: "Pizza Salgada",
    },
    {
      id: 5,
      name: "Portuguesa",
      price: 45.0,
      image: "portuguesa.jpg",
      ingredients: "Presunto, ovo, cebola, azeitona, mussarela, molho de tomate",
      category: "Pizza Salgada",
    },
    {
      id: 6,
      name: "Vegetariana",
      price: 41.5,
      image: "vegetariana.jpg",
      ingredients: "Pimentão, cebola, tomate, champignon, milho, mussarela, molho de tomate",
      category: "Pizza Salgada",
    },

    // Pizzas Doces
    {
      id: 7,
      name: "Chocolate",
      price: 49.5,
      image: "chocolate.png",
      ingredients: "Chocolate meio amargo, creme de leite, creme de avelã, granulado crocante",
      category: "Pizza Doce",
    },
    {
      id: 8,
      name: "Romeu e Julieta",
      price: 40.5,
      image: "romeu-e-julieta.png",
      ingredients: "Creme de leite, leite condensado, goiabada-cascão, mussarela em fatias e canela em pó",
      category: "Pizza Doce",
    },

    // Refrigerantes
    {
      id: 9,
      name: "Coca-Cola 2L",
      price: 8.9,
      image: "coca-cola.png",
      ingredients: "Refrigerante Coca-Cola 2 litros",
      category: "Refrigerantes",
    },
    {
      id: 10,
      name: "Fanta Laranja 2L",
      price: 7.9,
      image: "fanta.png",
      ingredients: "Refrigerante Fanta sabor Laranja 2 litros",
      category: "Refrigerantes",
    },
    {
      id: 11,
      name: "Sprite 2L",
      price: 7.9,
      image: "sprite.png",
      ingredients: "Refrigerante Sprite 2 litros",
      category: "Refrigerantes",
    },
    {
      id: 12,
      name: "Guaraná Antarctica 2L",
      price: 7.9,
      image: "guarana.png",
      ingredients: "Refrigerante Guaraná Antarctica 2 litros",
      category: "Refrigerantes",
    },

    // Sucos
    {
      id: 13,
      name: "Suco Del Valle Laranja",
      price: 6.5,
      image: "suco-laranja.png",
      ingredients: "Suco Del Valle sabor Laranja 1 litro",
      category: "Sucos",
    },
    {
      id: 14,
      name: "Suco Del Valle Uva",
      price: 6.5,
      image: "suco-uva.png",
      ingredients: "Suco Del Valle sabor Uva 1 litro",
      category: "Sucos",
    },

    // Águas
    {
      id: 15,
      name: "Água Mineral Crystal 500ml",
      price: 3.5,
      image: "agua-crystal.png",
      ingredients: "Água mineral Crystal sem gás 500ml",
      category: "Águas",
    },
    {
      id: 16,
      name: "Água com Gás Bonafont 500ml",
      price: 3.9,
      image: "agua-gas.png",
      ingredients: "Água mineral Bonafont com gás 500ml",
      category: "Águas",
    },

    // Cervejas
    {
      id: 17,
      name: "Heineken 600ml",
      price: 13.9,
      image: "heineken.png",
      ingredients: "Cerveja Heineken long neck 600ml",
      category: "Cervejas",
    },
    {
      id: 18,
      name: "Budweiser 550ml",
      price: 11.9,
      image: "budweiser.png",
      ingredients: "Cerveja Budweiser long neck 550ml",
      category: "Cervejas",
    },
    {
      id: 19,
      name: "Stella Artois 550ml",
      price: 12.9,
      image: "stella.png",
      ingredients: "Cerveja Stella Artois long neck 550ml",
      category: "Cervejas",
    },
    {
      id: 20,
      name: "Corona Extra 355ml",
      price: 12.9,
      image: "corona.png",
      ingredients: "Cerveja Corona Extra long neck 355ml",
      category: "Cervejas",
    },

    // Vinhos
    {
      id: 21,
      name: "** Consulte preços **",
      price: 0.00,
      image: "vinhos.png",
      ingredients: "Casillero del Diablo, Salton, Miolo",
      category: "Vinhos",
    },
  ];

  let created = 0;

  for (const product of products) {
    await prisma.product.create({
      data: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        ingredients: product.ingredients,
        category: product.category,
      },
    });

    console.log(`✅ ${product.name} - R$ ${product.price.toFixed(2)}`);
    created++;
  }

  console.log(`\n🎉 Seed concluído com sucesso!`);
  console.log(`📊 Total de produtos: ${created}`);
  console.log(`🍕 Pizzas Salgadas: 6`);
  console.log(`🍰 Pizzas Doces: 2`);
  console.log(`🥤 Refrigerantes: 4`);
  console.log(`🧃 Sucos: 2`);
  console.log(`💧 Águas: 2`);
  console.log(`🍺 Cervejas: 4`);
  console.log(`🍷 Vinhos: 1`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("\n✅ Desconectado do banco de dados");
  })
  .catch(async (e: Error) => {
    console.error("\n❌ Erro ao executar seed:");
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });