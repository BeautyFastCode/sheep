/*
 * (c) BeautyFastCode.com
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

var gulp = require('gulp'),
    del = require('del'),
    sass = require('gulp-sass');

/**
 * Gulp is a toolkit for automating painful or time-consuming tasks.
 *
 * @author    Bogumił Brzeziński <beautyfastcode@gmail.com>
 * @copyright BeautyFastCode.com
 */

var build = {
    root: 'public',
    css: 'public/css',
    js: 'public/js',
    fonts: 'public/fonts',
    img: 'public/img'
};

var src = {
    node_modules: '/node_modules',
    sass: 'sass/**/*.scss',
    pug: 'templates/*.pug'
};

/*
 * Tasks for gulp.
 *
 * Run: $ gulp - in the command line.
 */
gulp.task('default', ['sass', 'js', 'pug']);
gulp.task('clean');

/*
 * Clean the build folder.
 */
gulp.task('clean', function () {
    return del(build.root);
});

/*
 * Compile sass to css and copy to destination folder.
 */
gulp.task('sass', function () {
    return gulp.src(src.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(build.css));
});

/*
 * Copy the JavaScripts to the build folder.
 */
gulp.task('js', function () {
    gulp.src('node_modules/jquery/jquery.min.js')
        .pipe(gulp.dest(build.js));

    gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js')
        .pipe(gulp.dest(build.js));

    gulp.src('node_modules/popper.js/dist/umd/popper.min.js')
        .pipe(gulp.dest(build.js));
});

/*
 * Compile pug to html and copy to destination folder.
 */
gulp.task('pug', function() {
    gulp.src('templates/index.html')
        .pipe(gulp.dest(build.root));
});
