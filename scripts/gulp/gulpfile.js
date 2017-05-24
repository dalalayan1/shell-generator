var gulp = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

    gulp.task("build", function(){
        browserify('src/main.js')
            .transform('babelify')
            .bundle()
            .pipe(source('bundle.js'))
            .pipe(gulp.dest('dist/js'));
    });

    gulp.task("copy",function(){
        gulp.src('src/index.html')
            .pipe(gulp.dest('dist'));
    });

    gulp.task("default",["build","copy"]);
