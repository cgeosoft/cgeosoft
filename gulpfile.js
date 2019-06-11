const gulp = require('gulp')
const zip = require('gulp-zip');

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
 
gulp.task('archive', () =>
    gulp.src('./dist/*')
        .pipe(zip('release.zip'))
        .pipe(gulp.dest('dist'))
);