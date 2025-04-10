<div id="top"></div>

[![GitHub contributors](https://img.shields.io/github/contributors/nelsonacos/people-panel.svg?style=for-the-badge)](https://github.com/nelsonacos/people-panel/graphs/contributors)
[![GitHub issues](https://img.shields.io/github/issues/nelsonacos/people-panel?style=for-the-badge)](https://github.com/nelsonacos/people-panel/issues)
[![GitHub forks](https://img.shields.io/github/forks/nelsonacos/people-panel?style=for-the-badge)](https://github.com/nelsonacos/people-panel/network)
[![GitHub stars](https://img.shields.io/github/stars/nelsonacos/people-panel?style=for-the-badge)](https://github.com/nelsonacos/people-panel/stargazers)
[![GitHub license](https://img.shields.io/github/license/nelsonacos/people-panel?style=for-the-badge)](https://github.com/nelsonacos/people-panel/blob/main/LICENSE)
[![Linkedin url](https://img.shields.io/badge/-LinkedIn-black.svg?color=%23555555&logo=linkedin&style=for-the-badge)](https://www.linkedin.com/in/nelchar/)

<br />
<div align="center">

  <h3 align="center">People Panel</h3>

  <p align="center">
    <a href="#top"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="#">View Demo</a>
    ·
    <a href="https://github.com/nelsonacos/people-panel/issues">Report Bug</a>
    ·
    <a href="https://github.com/nelsonacos/people-panel/issues">Request Feature</a>
  </p>
</div>

<p align="center">
  <a href="https://react.dev/">
  <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge" alt="React">
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge" alt="TypeScript">
  </a>
  <a href="https://vitejs.dev/">
    <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge" alt="Vite">
  </a>
  <a href="https://pnpm.io/">
    <img src="https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=white&style=for-the-badge" alt="pnpm">
  </a>
  <a href="https://vitest.dev/">
    <img src="https://img.shields.io/badge/Vitest-6E9F18?logo=vitest&logoColor=white&style=for-the-badge" alt="Vitest">
  </a>
  <a href="https://clerk.dev/">
    <img src="https://img.shields.io/badge/Clerk-6C47FF?logo=clerk&logoColor=white&style=for-the-badge" alt="Clerk">
  </a>
  <a href="https://github.com/molefrog/wouter">
    <img src="https://img.shields.io/badge/Wouter-CA4245?logo=react&logoColor=white&style=for-the-badge" alt="Wouter">
  </a>
</p>

## About The Project

People Panel is a modern web application built with React, TypeScript, and Vite, utilizing `pnpm` for fast and reliable package management.

### Prerequisites

Install [Node.js](https://nodejs.org/en/download/):

```sh
sudo apt install nodejs
```

Install [pnpm](https://pnpm.io/installation):

```sh
npm install -g pnpm
```

### 🔐 Clerk Integration (Authentication)

This project uses [Clerk](https://clerk.dev/) to handle authentication and user management.

#### Setup

1. Go to [https://clerk.dev](https://clerk.dev) and create a free account.
2. Create a new application in the Clerk dashboard.
3. Copy the **Publishable Key** from the dashboard.

<p align="right">(<a href="#top">back to top</a>)</p>

### Getting Started

#### Running the Project with Docker Compose

1. Clone the repository

```sh
git clone https://github.com/nelsonacos/people-panel.git
```

2. Go to the project folder

```sh
cd people-panel
```
3. In the root of your project, create the `.env` file to configure the environment variables

```sh
# Unix System
cat .env.example > .env

# Windows System
copy .env.example .env
```

4. Configure your `.env` file

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_cmlnaxwwkwmwrwdwWxlcGhhbnQtODsowwwvwcwxw
```

> 📝 **Note**: Vite automatically loads variables from `.env` files. Make sure your key starts with `VITE_` to be available in `import.meta.env`.

5. Run the command:

```sh
docker-compose up --build
```

Then open http://localhost:3000/ in your browser.

#### Running the Project Locally (without Docker)

1. Clone the repository

```sh
git clone https://github.com/nelsonacos/people-panel.git
```

2. Go to the project folder

```sh
cd people-panel
```

3. In the root of your project, create the `.env` file to configure the environment variables

```sh
# Unix System
cat .env.example > .env

# Windows System
copy .env.example .env
```

4. Configure your `.env` file

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_cmlnaxwwkwmwrwdwWxlcGhhbnQtODsowwwvwcwxw
```

> 📝 **Note**: Vite automatically loads variables from `.env` files. Make sure your key starts with `VITE_` to be available in `import.meta.env`.

5. Install dependencies

```sh
pnpm install
```

6. Start the development server

```sh
pnpm run dev
```

Then open [http://localhost:3000/](http://localhost:3000/) in your browser.

<p align="right">(<a href="#top">back to top</a>)</p>

### React + TypeScript + Vite

This setup provides a modern developer experience using:

- ⚡️ Vite for fast builds and hot module replacement
- ⚛️ React with JSX support
- 🟦 TypeScript for static typing

### ESLint Configuration

To enhance code quality, consider expanding the ESLint configuration with type-aware rules:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also use additional plugins:

```js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

<p align="right">(<a href="#top">back to top</a>)</p>