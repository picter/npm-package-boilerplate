# npm-package-boilerplate
Boilerplate to create new modules to be shared on NPM.


## Example
There is an example inside the `src` folder.

To check it out, you need to build and install this module in another React application.
You can do that running the following commands:

```bash
// inside npm-package-boilerplate module
npm i; npm run build

// inside your react application
npm link ../path/to/npm-package-boilerplate
```

## ESLint
This module has eslint configured following the pattern from [eslint-config-picter](https://www.npmjs.com/package/eslint-config-picter).

You can run the linter with the following commands:

```bash
npm run lint
// or
npm run lint:watch
```

## Testing
We are using [Jest](https://facebook.github.io/jest/) and [Enzyme](airbnb.io/enzyme) to create unit tests. You can check using the following commands:

```bash
npm run test
// or
npm run build:watch
```

## Build
```bash
npm run build
// or
npm run build:watch
```

## Publishing
