# 🎉 PoupApp: Meu Dashboard Financeiro (React & Tailwind na Veia!)

## 🚀 Uma Visão Rápida

O **PoupApp** é um projeto que simula um dashboard de finanças pessoais, criado durante a carreira **Front-end com React da Alura** (com o Prof. Vinicius Neves (@viniciosneves), um grande guia!).

**O Foco Principal?** Dominar e praticar **Tailwind CSS**. A ideia foi construir uma interface 100% responsiva e moderna, provando que é possível estilizar um projeto complexo usando apenas classes de utilidade.

---

## ✨ Tecnologias em Ação

| Tecnologia | Por Que Usei? |
| :--- | :--- |
| **React** | Para componentizar tudo! Garanti que o código fosse modular, limpo e fácil de escalar. |
| **Tailwind CSS** | **O Foco do Projeto!** Estilização super rápida, responsiva e de alta qualidade. Sem mais bagunça de arquivos CSS gigantes. |
| **Hooks (useRef)** | O truque de mágica! Usei o `useRef` para controlar a abertura e fechamento do Modal de forma **direta e super performática**, aproveitando a API nativa do elemento `<dialog>`. Sem *re-renders* desnecessários! |
| **JavaScript** | A lógica por trás da experiência do usuário. |

---

## 💡 Meus Toques Pessoais (As Partes que Mais Curti!)

O projeto já era ótimo, mas decidi dar meus passos além para torná-lo único no meu portfólio:

### 1. Abertura de Modal Elegante com `useRef`

* Implementei a lógica de *click* nos botões **"Adicionar Transação"** e **"Adicionar Conta"**.
* **Destaque Técnico:** Em vez de usar `useState` (que causa re-render), usei **`useRef`** para chamar o método nativo `showModal()` do HTML `<dialog>`. Isso é **mais rápido e limpa o código**.
* A modal, por enquanto, mostra a mensagem: *"Essa funcionalidade ainda está em processo de criação."* (Afinal, todo projeto bom está sempre evoluindo!)

### 2. Portfólio Integrado

* Adicionei meus links diretos do **LinkedIn** e **GitHub** à interface, para que você possa me conhecer e ver mais dos meus projetos!

---

## 🛠️ Como Ver o PoupApp Rodando

Quer dar uma olhada no código e na mágica do Tailwind?

1.  **Clone o projeto:**
    ```bash
    git clone [COLOQUE_SEU_LINK_DO_REPOSITÓRIO_AQUI]
    cd PoupApp
    ```

2.  **Instale as dependências (coisa rápida):**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Mande rodar:**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```

Acesse o `localhost` e comece a clicar nos botões!

---
