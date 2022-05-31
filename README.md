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

## Demo

[https://yilingtung.github.io/github-explorer/](https://yilingtung.github.io/github-explorer/)
<br>

<p align="center">
   <img src="/images/demo.gif" width="600" >
</p><br><br>

## Features

- Long list virtualization.
- Lazy load data & infinite scroll.
- Filtering.
- Route as modal.

#### Long List Virtualization

Only renders a small subset of your rows at any given time, and can dramatically reduce the time it takes to re-render the components as well as the number of DOM nodes created.

<p align="center">
   <img src="/images/windowing.gif" width="600" >
</p><br><br>

#### Lazy load data & infinite scroll

<p align="center">
   <img src="/images/infinite-scroll.gif" width="600" >
</p><br><br>

#### Filtering

Support `type`, `sort`, `direction` to filtering organization's repos. Handle the filtering logic to prevent the same filter request from being triggered twice.

<p align="center">
   <img src="/images/filters.gif" width="600" >
</p><br><br>

#### Route as Modal

Route as modal to quick viewing repo's detail and README.md for better user experiences ans SEO.<br>
On many popular social media, opening a post will update the URL but won't trigger a navigation and will instead display the content inside a modal. This behavior ensures the user won't lose the current UI context (scroll position).

<p align="center">
   <img src="/images/route-as-modal.gif" width="600" >
</p><br><br>

#### API Rate Limit

Becouse Github API has [rate limit](https://docs.github.com/en/rest/overview/resources-in-the-rest-api) . Unauthenticated requests allows up to 10 requests per minute. That is why you may find infinite scroll becomes a button trigger sometimes.

## Built With

- [React.js](https://reactjs.org/)
- [styled-components](https://styled-components.com/)
- [react-redux](https://react-redux.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [react-window](https://github.com/bvaughn/react-window)

## Lint

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)

## File Structure

Refer to [Atom design](http://bradfrost.com/blog/post/atomic-web-design/).

```
src
├── assets                          <-- icons and images
├── components
│   └── atoms                       <-- atoms: Input, Button...
│   │   └── Com1
│   │       └── index.ts            <-- export component from here
│   │       └── Com1.tsx            <-- component
│   │       └── styles.tsx           <-- styled component
│   └── molecules                   <-- molecules: CardRepo...
│   └── organisms                   <-- organisms: Header... might has some api logic
│   └── layouts                     <-- sharing layouts
│   └── pages                       <-- combine components, implement app business logic
├── App.tsx                         <-- app routes
├── store                           <-- redux store
│   └── index.ts
│   └── reducer1
│   └── reducer2
├── styles                           <-- styles
│   └── globalStyles.ts
│   └── theme.ts
└── utis
    └── constants                   <-- endpoints, layout sizes
    └── functions                   <-- helper functions
    └── hooks                       <-- hooks
    └── maps                        <-- errorMap, languageColorsMap
types                               <-- interface, type

```

## Reference

- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
- [Long list windowing](https://zh-hant.reactjs.org/docs/optimizing-performance.html#virtualize-long-lists)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
