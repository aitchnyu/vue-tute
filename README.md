# Yet Another Vue Widgets Tutorial

- Can integrate into any existing project with just a few tags
- Code splitting to reduce bundle size for each page
- Source maps to debug js and CSS
- Linting to format the code

## To run this project

```
$ cd vueapp
$ npm install # only do this once
$ npm run watch
```

## To generate optimum bundles

```$ npm run build```

## To format the code

```$ npm run lint```

## How to create
Run:

```
$ vue create vueapp

Vue CLI v4.5.13
? Please pick a preset: Manually select features
? Check the features needed for your project: Choose Vue version, Babel, Linter, Unit
? Choose a version of Vue.js that you want to start the project with 2.x
? Pick a linter / formatter config: Standard
? Pick additional lint features: Lint on save
? Pick a unit testing solution: Jest
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? No
```

Then run the automatically created git project:

`rm -rf vueapp/.git`