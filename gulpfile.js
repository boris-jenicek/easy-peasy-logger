const gulp = require('gulp');
const copy = require('gulp-copy');
const through = require('through2');
const sourceFiles = ['README.md'];
const outputPath = 'easy-peasy-logger/';

gulp.task('default', copyFunction);

function copyFunction() {
  return gulp
    .src(sourceFiles)
    .pipe(copy(outputPath, { prefix: 1 }))
    .pipe(verify());
}

function verify() {
  var options = { objectMode: true };
  return through(options, write, end);

  function write(file, enc, cb) {
    console.log('file', file.path);
    cb(null, file);
  }

  function end(cb) {
    console.log('done');
    cb();
  }
}
