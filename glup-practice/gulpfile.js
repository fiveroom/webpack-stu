const { src, series, dest, watch, parallel } = require('gulp')

const htmlmin = require('gulp-htmlmin');
// 将资源注入html
const inject = require('gulp-inject')

const babel = require('gulp-babel');
const terser = require('gulp-terser')


const less = require('gulp-less');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cleancss = require('gulp-clean-css')


// 开启服务
const browserSync = require('browser-sync');

// 删除文件夹
const del = require('del');

const htmlTask = () => {
    return src('./src/*.html', { base: './src' })
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('./dist'))
}

const jsTask = () => {
    return src('./src/**/*.js', { base: './src' })
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(terser({ keep_fnames: true, toplevel: true }))
        .pipe(dest('./dist'))
}

const lessTask = () => {
    return src('./src/**/*.less', { base: './src' })
        .pipe(less())
        .pipe(postcss([autoprefixer()]))
        .pipe(cleancss())
        .pipe(dest('./dist'))

}


const injectHtml = () => {
    return src('./dist/*.html')
        .pipe(inject(src(['./dist/**/*.js', './dist/**/*.css'], { read: false, }), {relative: true}))
        .pipe(dest('./dist'))
}


const clean = () => del(['dist']);

const bs = browserSync.create();

const serve = () => {
    watch(["./src/**/*.js"], series(jsTask, injectHtml))
    watch(["./src/**/*.css"], series(jsTask, injectHtml))
    watch(["./src/*.html"], series(jsTask, injectHtml))
    bs.init({
        port: 3000,
        open: true,
        files: './dist/*',  // 哪些文件变化就刷新浏览器
        server: {
            baseDir: './dist'
        }
    })
}

const assetsTask = series(parallel(htmlTask, jsTask, lessTask), injectHtml);

const serveTask = series(clean, assetsTask, serve);
const buildTask = series(clean, assetsTask);

module.exports = {
    htmlTask,
    jsTask,
    lessTask,
    injectHtml,
    serveTask,
    buildTask
}