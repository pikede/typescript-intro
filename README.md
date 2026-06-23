# TypeScript Intro

A small, hands‑on TypeScript example demonstrating core language features (types, functions, arrays, objects, tuples, enums, classes, unions, and type assertions) using a single example source file you can compile and run.

## Contents

- `typescript.ts` — commented TypeScript examples covering basic and intermediate language features.
- `typescript.js` / `typescript.js.map` — compiled JavaScript output and source map.
- `typescript.d.ts` / `typescript.d.ts.map` — generated declaration file and map.
- `tsconfig.json` — TypeScript compiler configuration.
- `.gitattributes` — repository attributes.

## Quickstart — run the example

Requirements:
- Node.js (16+ recommended)
- npm (or yarn)

From a fresh clone, compile and run:

```bash
# compile the TypeScript file to JavaScript
npx tsc typescript.ts

# run the compiled JavaScript
node typescript.js
```

Or run directly in development with ts-node:

```bash
npx ts-node typescript.ts
```

Watch mode (recompile on file changes):

```bash
# use TypeScript's watch mode to recompile automatically when files change
npx tsc --watch
# or the short form
npx tsc -w
```

Notes:
- This repository does not include a package.json. Using `npx` avoids global installs. To set up a local dev environment:

```bash
npm init -y
npm install --save-dev typescript ts-node @types/node
npx tsc --init
```

## What the examples show

Inside `typescript.ts` you’ll find short, commented examples demonstrating:

- basic primitives: `boolean`, `number`, `string`
- arrays and tuple types
- `enum` usage and lookups by name/ordinal
- `any`, `void`, and `never` with notes on tradeoffs
- interfaces and `type` aliases
- type assertions
- functions with typed parameters and return values
- classes with fields, constructors and access modifiers
- union types

Try editing values or changing types and re-running the compiler to see TypeScript’s checks in action.

## About the tsconfig

The provided `tsconfig.json` favors strict, modern settings:

- `strict: true` for full strictness
- `module: "nodenext"` and `target: "esnext"` for modern module resolution/output
- `declaration` and `declarationMap` enabled to generate type declarations

Adjust `rootDir` / `outDir` or other options in `tsconfig.json` to fit your workflow.

## License

No license file is included. Add a LICENSE (e.g., MIT) if you want to make this repository explicitly open source.
