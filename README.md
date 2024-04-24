# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Testing

[Testing by Vitest](https://vitest.dev/)

[Testing Library - react-testing-library / typescript](https://testing-library.com/docs/react-testing-library/intro/)

[MSW](https://mswjs.io/docs/getting-started)

## Todo

- [x] setup react / ts
- [x] setup vitest
- [x] setup vite
- [x] install and setup react-router
- [x] set up tailwind
- [ ] [implement the speech reognition function](https://qiita.com/hmmrjn/items/4b77a86030ed0071f548)
- [ ] Implement the search function for the input by voice
- [ ] diary function

## Component Architecture - Atomic Design

- Atoms: just blocks of a UI
- Molecules: Combination of Atoms
- Organisms: Combination of molecules and atoms. sometimes with logics
- Templates: Wrapper of components(atoms/molecules/organisms) without containing specific contents. sometimes with logics
- Pages: Specific instance where templates are populated with real contents and it is functional

[(referenced from this page)](https://www.linkedin.com/pulse/atomic-design-react-components-kartik-budhraja/)
