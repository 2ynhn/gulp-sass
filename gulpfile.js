const {parallel, series, src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));


function html(){
    return src('*.html', {allowEmpty:true})
        .pipe(browserSync.reload({
            stream: true
        }))
        // .pipe(dest('dist/'))

}
exports.html = html;

function style(){
    return src('src/styles/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .on('error', notify.onError())
    .pipe(dest('dist/styles'))
    .pipe(postcss([cssnano()]))
    .pipe(rename({
        suffix: ".min"
    }))
    .pipe(browserSync.reload({
        stream: true
    }))
    .pipe(dest('dist/styles'))

}
exports.style = style;


function taskWatch(){
    browserSync.init({
        server:{
            baseDir: "./"
        },
        injectChanges: true,
    })
    watch('**/*.html', html);

    watch('src/styles/**/*.scss', style);
}
exports.taskWatch = taskWatch;

exports.default = series(parallel(html, style), taskWatch);