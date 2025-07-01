# Overview
 A simple vite plugin to add dts extensions to your index.d.ts file imports.

## Prerequisites
- Node
- NPM

## Installation

```
npm i vite-plugin-extensions -D
```

## Usage

```tsx
// vite.config.ts

import path from "path";
import { defineConfig } from "vite";
import { runExtensions } from "vite-plugin-extensions";

export default defineConfig(({ mode }) => {
  return {
    base: "./",
    build: {
      lib: {
        entry: path.resolve(__dirname, "src/index.ts"),
        name: "Project",
        formats: ["es", "cjs"],
        fileName: (format, entryName) => `${entryName}$.${format}.js`,
      },
    },
    plugins: [runExtensions('index.d.ts')],
    resolve: {
      alias: {
        src: path.resolve(__dirname, "/src"),
      },
    },
  };
});
```

## Development
- npm link
- switch to project
- npm link <package_name>

## Scripts
- We've included a couple of helpful scripts for faster development.
- deploy: `npm run deploy -- 'commit message'`
- publish: `npm run publish -- 'commit message' [major|minor|patch]`

## Husky
- Husky configuration is setup to lint and format the repo on every commit
- Edit the `.husky/pre-commit` file to change your settings

## Author
- Eric Hubbell
- eric@erichubbell.com
