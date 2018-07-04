const gulp = require('gulp')
require('gulp-cg-toolkit')(gulp, {
  files: [{
    source: './src/static/**/*.*',
    destination: './dist/'
  }, {
    source: './node_modules/devicon/devicon.min.css',
    destination: './dist/devicon/'
  }, {
    source: './node_modules/devicon/fonts/**/*.*',
    destination: './dist/devicon/fonts/'
  }]
})
