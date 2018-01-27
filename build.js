var Metalsmith = require('metalsmith');
var layouts = require('metalsmith-layouts');
var markdown = require('metalsmith-markdown');
var permalinks = require('metalsmith-permalinks');
var sass = require('metalsmith-sass');
var discoverPartials = require('metalsmith-discover-partials')

var metadata = require('./metadata.json');

Metalsmith(__dirname)
  .metadata(metadata)
  .source('./src/pages')
  .destination('./dist')
  .clean(true)
  .use(markdown())
  .use(permalinks({
    relative: false
  }))
  .use(discoverPartials({
    directory: './src/partials',
    pattern: /\.hbs$/
  }))
  .use(layouts({
    default: 'default.hbs',
    engine: 'handlebars',
    directory: "./src/layouts",
  }))
  .build(function (err) {
    if (err) throw err;
  });

Metalsmith(__dirname)
  .source('./src/scss')
  .destination('./dist')
  .clean(true)
  .use(sass({
    outputDir: "css/",
    outputStyle: "expanded",
    sourceMap: true,
    sourceMapContents: true,
  }))
  .build(function (err) {
    if (err) throw err;
  });