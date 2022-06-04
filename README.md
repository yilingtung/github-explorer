<p align="center">
    <img src="./src/assets/images/banner.png" alt="Repository logo" width="300" >
</p>

<h3 align="center">Github Expolorer</h3>

<p align="center">
  Organization based github repositories searching application.
  <br><br>
  <a href="https://yilingtung.github.io/github-explorer/"><strong>Visit the App »</strong></a>
  <br>
</p>

## Intro

This project was bootstrapped with Create React App and TypeScript template.<br>
Using long list virtualization, lazy load and caching to improve application performance.

## Demo

You counld try the real app on github page. 👉🏻 [https://yilingtung.github.io/github-explorer/](https://yilingtung.github.io/github-explorer/)
<br>

<p align="center">
   <img src="/images/demo.gif" width="600" >
</p><br><br>

## Overview 📖

1. [**How To Use**](https://github.com/yilingtung/github-explorer#how-to-use)
   - [With Storybook](https://github.com/yilingtung/github-explorer#with-storybook)
2. [**Features**](https://github.com/yilingtung/github-explorer#features)
   - [Long List Virtualization](https://github.com/yilingtung/github-explorer#long-list-virtualization)
   - [Lazy Load & Infinite Scroll](https://github.com/yilingtung/github-explorer#lazy-load--infinite-scroll)
   - [Filtering & Caching](https://github.com/yilingtung/github-explorer#filtering--caching)
   - [Toggle List Arrangement](https://github.com/yilingtung/github-explorer#toggle-list-arrangement)
   - [Route as Modal](https://github.com/yilingtung/github-explorer#route-as-modal)
3. [**File Structure**](https://github.com/yilingtung/github-explorer#file-structure)
4. [**Build With**](https://github.com/yilingtung/github-explorer#build-with)
5. [**Code Quality & Test**](https://github.com/yilingtung/github-explorer#code-quality--test)
6. [**Reference**](https://github.com/yilingtung/github-explorer#reference)

## How To Use

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```
$ yarn && yarn start
```

#### With Storybook

After clone the project and install all dependencies.
You can run the script below and open [http://localhost:6006](http://localhost:6006) to view UI components in the Storybook.

```
$ yarn storybook
```

## Features

#### Long List Virtualization

Only renders a small subset of your rows at any given time, and can dramatically reduce the time it takes to re-render the components as well as the number of DOM nodes created.

<p align="center">
   <img src="/images/windowing.gif" width="600" >
</p><br><br>

#### Lazy Load & Infinite Scroll

<p align="center">
   <img src="/images/infinite-scroll.gif" width="600" >
</p><br><br>

#### Filtering & Caching

Support `type`, `sort`, `direction` to filtering organization's repos. Use [react-query](https://react-query.tanstack.com/) as state management and handles caching to prevent query refetching.

<p align="center">
   <img src="/images/filters.gif" width="600" >
</p><br><br>

#### Toggle List Arrangement

Support two way to display the list of repositories: "Row" and "Grid".

<p align="center">
   <img src="/images/list-display.gif" width="600" >
</p><br><br>

#### Route as Modal

Route as modal to quick viewing repo's detail and README.md for better user experiences ans SEO.<br>
On many popular social media, opening a post will update the URL but won't trigger a navigation and will instead display the content inside a modal. This behavior ensures the user won't lose the current UI context (scroll position).

<p align="center">
   <img src="/images/route-as-modal.gif" width="600" >
</p><br><br>

#### API Rate Limit

Becouse Github API has [rate limit](https://docs.github.com/en/rest/overview/resources-in-the-rest-api) . Unauthenticated requests allows up to 10 requests per minute. That is why you may find infinite scroll becomes a button trigger sometimes.

## File Structure

Refer to [Atom design](http://bradfrost.com/blog/post/atomic-web-design/).

```
src
├── assets                          <-- icons and images
├── components
│   └── atoms                       <-- atoms: Input, Button...
│   │   └── Com1
│   │       └── index.ts            <-- export component from here
│   │       └── styles.tsx          <-- styled of Com1
│   │       └── Com1.tsx            <-- Com1 component
│   │       └── Com1.stories.tsx    <-- the storybook of Com1
│   │       └── Com1.test.tsx       <-- unit test of Com1
│   └── molecules                   <-- molecules: CardRepo...
│   └── organisms                   <-- organisms: Header... might has some api logic
│   └── layouts                     <-- sharing layouts
│   └── pages                       <-- combine components, implement app business logic
├── App.tsx                         <-- app routes
├── styles                          <-- styles
│   └── globalStyles.ts
│   └── theme.ts
└── utis
    └── api                         <-- api functions
    └── constants                   <-- endpoints, layout constants
    └── functions                   <-- helper functions
    └── hooks                       <-- custom hooks
    └── maps                        <-- errorMap, languageColorsMap
    └── queryKeys                   <-- query keys for manage query caching
types                               <-- interface, type

```

## Build With

- [React.js](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [styled-components](https://styled-components.com/)
- [react-window](https://github.com/bvaughn/react-window)
- [react-query](https://react-query.tanstack.com/)

## Code Quality & Test

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/)

## Reference

- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
- [Long list windowing](https://zh-hant.reactjs.org/docs/optimizing-performance.html#virtualize-long-lists)
- [angular commit message format](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit)
