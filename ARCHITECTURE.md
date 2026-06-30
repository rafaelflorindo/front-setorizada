# Sistema Setorizada

## Objetivo

Sistema web para gerenciamento da Setorizada da Congregação Cristã no Brasil.

---

# Stack

## Frontend

- React 19
- Vite
- React Router DOM
- Axios
- React Icons
- CSS Modules
- CSS Variables

## Backend

- Node.js
- Express
- Sequelize
- PostgreSQL
- JWT

---

# Estrutura

src/

assets/

components/

config/

contexts/

hooks/

layouts/

pages/

routes/

services/

styles/

utils/

---

# Convenções

## Componentes

Cada componente deve possuir:

Button/

Button.jsx

Button.module.css

index.js

---

## Páginas

Cada página deve possuir:

Dashboard/

Dashboard.jsx

Dashboard.module.css

index.js

---

## Layouts

Mesmo padrão das páginas.

---

## Services

Separados por domínio.

Exemplo:

auth

alunos

usuarios

frequencias

---

## CSS

Nunca utilizar CSS global para componentes.

Todo componente deve utilizar CSS Modules.

---

## Responsividade

Mobile First.

Breakpoints:

0-767

768-1023

1024+

---

## Objetivo da arquitetura

Criar um template reutilizável para futuros sistemas.