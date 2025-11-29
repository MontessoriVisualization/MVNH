# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## Playground Persistence

The HTML/CSS/JS and C playgrounds support per-user persistence:

- Authenticated users (Firebase Auth) are saved to Firestore:
  - `playgrounds_htmlcssjs/{uid}` → `{ html, css, js, updatedAt }`
  - `playgrounds_c/{uid}` → `{ files[], flags[], activeFile, preset, updatedAt }`
- Guests fall back to `localStorage` keys (`lcj_html`, `c_files`, etc.).
- Autosave after 2s inactivity; `Ctrl+S` forces immediate save (and compile/run for C) plus preview refresh.
- Status indicator shows user (truncated), saving state, and last saved time.

### Extending
Add more fields (e.g. description, tags) by modifying `src/lib/persistence.ts` and extending Firestore docs.

### Firestore Security Rules (example)
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /playgrounds_htmlcssjs/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    match /playgrounds_c/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### Notes
- Ensure environment variables for Firebase are provided (Vite exposes those prefixed with `VITE_...`).
- Consider quota checks for file count & size.
- For large projects store file blobs in Cloud Storage and keep metadata in Firestore.
