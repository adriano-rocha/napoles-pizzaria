<div align="center">

<img src="public/pizzas/logo-napoles.png" alt="Nápoles Pizzaria" width="100" />

# 🍕 Nápoles Pizzaria

**Cardápio digital com pedidos online e pagamento integrado via Stripe**

🔗 **[Acesse o site](https://napoles-pizzaria.vercel.app)**

![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

</div>

---

## 📋 Sobre o projeto

A **Nápoles Pizzaria** é uma aplicação fullstack de cardápio digital onde clientes podem navegar pelo menu, montar o carrinho e realizar pagamentos online com segurança. O projeto simula um ambiente real de e-commerce para restaurantes, com autenticação de usuários, gestão de pedidos e integração completa com o gateway de pagamento Stripe.

---

## ✨ Funcionalidades

- 🔐 **Autenticação** — Cadastro e login com hash de senha via `bcryptjs` e sessão por cookies
- 🍕 **Cardápio por categorias** — Pizzas Salgadas, Pizzas Doces, Refrigerantes, Sucos, Águas, Cervejas e Vinhos
- 🛒 **Carrinho de compras** — Adicionar, remover e ajustar quantidades em tempo real (Zustand)
- 💳 **Checkout com Stripe** — Pagamento seguro com redirecionamento para Stripe Checkout
- 🔔 **Webhook Stripe** — Confirmação automática de pagamento e atualização de status do pedido
- 📦 **Gestão de pedidos** — Histórico de pedidos por usuário com status atualizado
- 📱 **Responsivo** — Layout adaptado para mobile e desktop

---

## 🛠 Stack tecnológica

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 15 (App Router) |
| Linguagem | TypeScript |
| Estilização | Tailwind CSS v4 |
| Banco de dados | PostgreSQL (Neon) |
| ORM | Prisma 6 |
| Pagamentos | Stripe (Checkout + Webhooks) |
| Estado global | Zustand |
| UI Components | Radix UI + shadcn/ui |
| Autenticação | Cookies + bcryptjs |
| HTTP Client | Axios |
| Deploy | Vercel |

---

## 🗂 Estrutura do projeto

```
src/
├── app/
│   ├── api/
│   │   ├── auth/          # Login e cadastro
│   │   ├── order/         # Criação de pedidos
│   │   ├── pizzas/        # Listagem de produtos
│   │   ├── success/       # Pós-pagamento
│   │   └── webhook/       # Webhook Stripe
│   ├── page.tsx           # Página principal (cardápio)
│   └── layout.tsx
├── components/
│   ├── cart/              # Carrinho (drawer)
│   ├── home/              # PizzaList, PizzaItem, About
│   ├── layout/            # Header, Footer
│   ├── login-area/        # Botão e formulários de auth
│   └── ui/                # Componentes base
├── stores/                # Zustand (cart, products, auth)
├── lib/                   # axios, utils, prisma singleton
└── generated/prisma/      # Client gerado pelo Prisma
prisma/
├── schema.prisma
└── seed.ts                # 21 produtos pré-cadastrados
```

---

## 🔄 Fluxo da aplicação

```
Usuário acessa o cardápio
        ↓
Navega pelas categorias → Adiciona itens ao carrinho
        ↓
Faz login / cadastro
        ↓
Finaliza pedido → API cria Order no banco → Redireciona para Stripe Checkout
        ↓
Pagamento aprovado → Stripe dispara Webhook
        ↓
API /webhook atualiza status do pedido para PAID
        ↓
Usuário é redirecionado para página de sucesso
```

---

## 🚀 Como rodar localmente

### Pré-requisitos

- Node.js 18+
- PostgreSQL rodando localmente
- Conta no [Stripe](https://stripe.com) (modo teste)
- [Stripe CLI](https://stripe.com/docs/stripe-cli) para testar webhooks

### Instalação

```bash
# Clone o repositório
git clone https://github.com/adriano-rocha/napoles-pizzaria.git
cd napoles-pizzaria

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
```

### Variáveis de ambiente

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/napoles_pizzaria?schema=public"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"

STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_KEY="whsec_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
```

### Banco de dados

```bash
# Cria as tabelas
npx prisma migrate deploy

# Gera o client
npx prisma generate

# Popula com os 21 produtos
npx prisma db seed
```

### Webhook Stripe (desenvolvimento)

```bash
# Em outro terminal, escute os eventos do Stripe
stripe listen --forward-to localhost:3000/api/webhook
```

### Servidor

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

---

## 💳 Cartão de teste (Stripe)

| Campo | Valor |
|---|---|
| Número | `4242 4242 4242 4242` |
| Validade | Qualquer data futura |
| CVC | Qualquer 3 dígitos |

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  Desenvolvido por <strong>Adriano Rocha</strong>
  <br/>
  <a href="https://github.com/adriano-rocha">GitHub</a> · <a href="https://linkedin.com/in/adriano-rocha">LinkedIn</a>
</div>