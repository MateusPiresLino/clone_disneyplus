const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./src/styles/*.scss') //função para recuperar os arquivos. 
        .pipe(sass({style: 'compressed'})) //compressão dos arquivos que serão compilados. 
        .pipe(gulp.dest('./dist/css')); //compilação dos arquivos a pasta dist/destino.
}

function images() {
    return gulp.src('./src/images/**/*') //função para recuperar os arquivos. 
        .pipe(imagemin()) //compressão dos arquivos que serão compilados. 
        .pipe(gulp.dest('./dist/images')); //compilação dos arquivos a pasta dist/destino.
}

exports.default = gulp.parallel(styles, images);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}