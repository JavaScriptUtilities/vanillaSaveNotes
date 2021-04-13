/* ----------------------------------------------------------
  Vars
---------------------------------------------------------- */

const gulp = require('gulp');
const {
    series
} = gulp;
const minify = require("gulp-minify");
const jshint = require('gulp-jshint');

/* ----------------------------------------------------------
  Minify
---------------------------------------------------------- */

function minifyjs() {
    return gulp.src('js/*.js')
        .pipe(minify({
            noSource: true,
            ext: {
                min: '.min.js'
            },
            ignoreFiles: ['*.min.js']
        }))
        .pipe(gulp.dest('js'));
}

exports.minifyjs = minifyjs;

/* ----------------------------------------------------------
  lint
---------------------------------------------------------- */

function lintjs() {
    return gulp.src('js/vanilla-save-notes.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
}

exports.lintjs = lintjs;

/* ----------------------------------------------------------
  Default tasks
---------------------------------------------------------- */

exports.default = series(lintjs, minifyjs);
