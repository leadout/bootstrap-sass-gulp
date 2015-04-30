# bootstrap-sass-gulp
### A starter project with bootstrap sass and gulp

Features:

- [SASS](http://sass-lang.com/) Full JS & HTML (no Coffeescript, no Jade) & SCSS automatically compiled on save (No ruby, we use node-sass !)
- [Gulp](http://gulpjs.com/)
- [Browserify](http://browserify.org/)
- [BrowserSync](http://www.browsersync.io/): during development it will auto-reload to save you from manually refreshing the page, the css is automatically injected and all your browsers are synchronized
- Javascript / CSS minification for production
- CSS3 ready with [Autoprefixer](https://github.com/postcss/autoprefixer): write CSS3 and vendor prefixes are added when needed
- Bootstrap sass
- Be consistent, with the [.editorconfig file](http://editorconfig.org/) your coding style will be the same across IDEs & editors (adapt it to your coding preferences)

## How to use bootstrap-sass-gulp

* `git clone https://github.com/leadout/bootstrap-sass-gulp.git` to clone the **bootstrap-sass-gulp** repository
* `cd bootstrap-sass-gulp`
* `npm install` to install node packages
* `bower install` to install bower packages

### Running the app during development

* `gulp dev` to serve using **Gulp**

Then navigate your browser to [http://localhost:3001](http://localhost:3001)

### Running the app in production

* `gulp prod` to minify javascript and css files for production deployment

## Contributors

* Raphael Martinez