import React from "react";
import { Pizza, Clock, Award, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Pizza className="w-12 h-12 text-red-600" />,
      title: "Ingredientes Frescos",
      description:
        "Selecionamos os melhores ingredientes diariamente para garantir a qualidade das nossas pizzas.",
    },
    {
      icon: <Clock className="w-12 h-12 text-red-600" />,
      title: "Entrega Rápida",
      description:
        "Sua pizza quentinha em até 45 minutos. Rapidez sem perder a qualidade.",
    },
    {
      icon: <Award className="w-12 h-12 text-red-600" />,
      title: "Receitas Tradicionais",
      description:
        "Seguimos receitas italianas autênticas, transmitidas por gerações.",
    },
    {
      icon: <Heart className="w-12 h-12 text-red-600" />,
      title: "Feito com Amor",
      description:
        "Cada pizza é preparada com dedicação e carinho pela nossa equipe.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl bg-gray-200">
              <img
                src="/pizzas/pizzaria-napoles.png"
                alt="Nossa Pizzaria"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-lg shadow-xl">
              <p className="text-4xl font-bold">20+</p>
              <p className="text-sm">Anos de tradição</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <h3 className="text-3xl font-bold text-green-500 mb-6">
              Nossa História
            </h3>
            <div className="space-y-4 text-white">
              <p>
                Tudo começou em 2003, quando nosso fundador, apaixonado pela
                culinária italiana, decidiu trazer os sabores autênticos da
                Itália para o Brasil.
              </p>
              <p>
                Com receitas tradicionais passadas de geração em geração, cada
                pizza é preparada artesanalmente, utilizando ingredientes
                selecionados e massa fermentada naturalmente por 48 horas.
              </p>
              <p>
                Hoje, somos referência em pizza de qualidade, atendendo milhares
                de clientes satisfeitos que confiam em nosso trabalho e
                dedicação.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-red-600">50k+</p>
                <p className="text-sm text-green-500">Pizzas vendidas</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-red-600">4.9★</p>
                <p className="text-sm text-green-600">Avaliação média</p>
              </div>
              <div className="text-center text-green-600">
                <p className="text-3xl font-bold text-red-600">100%</p>
                <p className="text-sm text-green-00">Satisfação</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-4">
            Sobre Nós
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Há mais de 20 anos levando sabor e tradição italiana para sua casa.
            Nossa paixão é fazer pizzas que marcam momentos especiais.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
