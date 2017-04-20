## Introduction

[Create React App](https://github.com/facebookincubator/create-react-app) is a great one-size-fits-most tool to create React Apps with no configuration.

This is a CRA app that includes basic modifications that I use in most of my React projects. Since the modifications are tailored toward my use, I don't imagine they'll fit exactly into anyone else's workflow. That being said, I've made the repo public in case it might work for you.

## Additions

- [Bootstrap](http://getbootstrap.com) v3 (no JS)
- [React Router](https://github.com/ReactTraining/react-router) with a starter page, a `Views` directory and handling for 404s.
- [Sass](http://sass-lang.com) with a starter `.scss` stylesheet.
- [A CSS Spinner](https://projects.lukehaas.me/css-loaders/) modified to use Sass, which is useful when waiting on the results of an API call.
- A `Components` directory which includes a file for shared components.
- [Font Awesome Icons](http://fontawesome.io) and an `<Icon />` component in `Components/Shared.js`.
- [Animate.css](https://github.com/daneden/animate.css/) with example usage in `Views/Page1.js`
- An `.atomignore` file which hides files compiled with Sass from your Atom tree view, if used with [this plugin](https://github.com/leny/atom-tree-ignore).

## Installation

1. Install [Create React App](https://github.com/facebookincubator/create-react-app).
2. Run `npm install` in your `created-react-app` directory.
3. Change `.gitignore-sample` to be `.gitignore`.

## Usage

Build for production using `npm run build`.

Run the dev server (which watches for changes to your Sass stylesheet) using `npm start`.
