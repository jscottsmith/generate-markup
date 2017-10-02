# Generate Markup

A function to generate HTML markup based on sets of `containers` and `assets` to simulate GumGum's ad builder.

[Demo](https://jscottsmith.github.io/generate-markup/dist/)

The `generateMarkup` function returns a generated string representing the whole HTML document containing the follwing:
    - CSS declarations that describe the styles of each asset by id.
    - `@media` queries that declare when each id will be displayed.
    - A series of divs with an id.

See here: [`generateMarkup(containers, assets)`](https://github.com/jscottsmith/generate-markup/blob/master/src/generateMarkup.js)

## Getting Started

Install dependencies:

```
yarn install
```

Run the webpack dev server:

```
yarn start
```

Open a browser @ [localhost:3000](http://localhost:3000/)
