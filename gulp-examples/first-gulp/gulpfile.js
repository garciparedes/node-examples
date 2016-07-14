'use strict';

const gulp      = require('gulp');
const sass      = require('gulp-sass');
const inject    = require('gulp-inject');


const PUBLIC_DIRNAME = './PUBLIC';
const PUBLIC_CSS_DIRNAME = PUBLIC_DIRNAME + '/css';
const PUBLIC_JS_DIRNAME = PUBLIC_DIRNAME + '/js';

const SASS_DIRNAME = './sass';


// Start
//##############################################################################

gulp.task('default', ['sass', 'inject']);


// Sass
//##############################################################################

gulp.task('sass', function () {
    return gulp.src(SASS_DIRNAME + '/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(PUBLIC_CSS_DIRNAME));
});


gulp.task('sass:watch', function () {
    gulp.watch(SASS_DIRNAME + '/**/*.scss', ['sass']);
});


// css & js inyector
//##############################################################################

gulp.task('inject',['sass'], function () {
    var target = gulp.src(PUBLIC_DIRNAME + '/index.html');

    var sources = gulp.src([
        PUBLIC_JS_DIRNAME + '/**/*.js',
        PUBLIC_CSS_DIRNAME + '/**/*.css'
    ], {read: false});

    return target.pipe(inject(sources, {relative: true}))
        .pipe(gulp.dest(PUBLIC_DIRNAME));
});


//##############################################################################
