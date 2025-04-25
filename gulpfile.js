const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function style() {
    return gulp.src('./src/styles/*.scss') //função para recuperar os arquivos. 
        .pipe(sass({style: 'compressed'})) //compressão dos arquivos que serão compilados. 
        .pipe(gulp.dest('./dist/css')); //compilação dos arquivos a pasta dist/destino.
}

exports.default = style;
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(style))
}