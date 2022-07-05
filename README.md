# Purple.JS

> **TL;DR:** run `npm start` on `limit-manager` directory

So, that's it. This is my technical test submission for UI Engineer position process.

This test is splited in two parts, in two directories:

- `purplejs`: Is the mini-react library, coded with Typescript.
- `limit-manager`: The Limit Manager proposed by use the PurpleJS lib to render a simple app.

Follow the infos and instructions separed by project:

## PurpleJS
I choosed to use Typescript, that is a library with lot of similarities to Javascript.

The main concepts of the PurpleJS is element, instance and reconcile:
- `element`: is the JSX translated into and object;
- `instance`: is the tree of objects representation of the *dom node*, *element object* and *child instances*;
- `reconcile`: is the diffing process.

In this project I used the folllowing task:
- Bundling and transpiling with TS and Webpack
- Tests with Jest
- Lint with Eslint and Standard patterns

Seriously, I have no idea how to test this without using Cypress.

I also included the JSX transpiling, just to learn how it works.

## Limit Manager
As proposed, I used Javascript on the implementantion.

The stack is:
- Bundling with Webpack and Babel
- Tests with Cypress
- Lint with Eslint and Standard patterns

👉  You can run the application simply running `npm start` in the `limit-manager` directory.

