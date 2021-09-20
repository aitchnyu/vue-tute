# Yet Another Vue Widgets Tutorial

- Can integrate into any existing project with just a few tags
- Code splitting to reduce bundle size for each page
- Source maps to debug js and CSS
- Linting to format the code
- Devtools

## To run this project

```
$ cd vueapp
$ npm install # only do this once
$ npm run watch
In Chrome, extension page has "Allow access to file URLs"
Open /web/app.html or /web/date.html
Check devtools, change state of widgets
```

To generate optimum bundles

```$ npm run build```

To format the code

```$ npm run lint```

To test the code

```$ npm run test:unit```

## How to create new project
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

Files - 

- main.js - mount stuff
- App.vue main SFC
- components/ and assets/
- Compiler has an entry point, pulls source and compiles into html

No need to mess with \_\_webpack_public_path__. Or there will be lots of files.

## Configure for an MPA

vue.config.js with pages options
- Takes app.js and dependencies
- Compiles js, CSS and assets into bundle, generates html
- Watch script in package.json for dev work, compile

## Configure code splitting per page and mounting

Generates vendors-pagename for each page

Demo uses moment, which has a lot of code for internationalization

Bundles for app.js and date.js have only necessary code.

The HelloWorld component can be invoked from our own code.

## Unit testing

```$ npm run test:unit```

Mounts components and checks their behavior. Uses Jest.