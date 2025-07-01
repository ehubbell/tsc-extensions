# Overview
 A simple cli to add dts extensions to your index.d.ts file imports.

## Prerequisites
- Node
- NPM

## Installation

```
npm i tsc-extensions -D
```

## Usage

```sh
tsc-extensions
tsc-extensions --path dist/index.d.ts
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
