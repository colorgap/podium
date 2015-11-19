var env = process.env.NODE_ENV || 'development';
var gulp = require('gulp');
    uglify = require('gulp-uglify')
    rename = require('gulp-rename')
    sass = require('gulp-sass')
    browserSync = require('browser-sync')
    minifyHtml = require('gulp-minify-html')
    bower = require('main-bower-files')
    gulpFilter = require('gulp-filter')
    concat = require('gulp-concat');

var config = {
    ui:{
        src:{
            scripts:'src/app/**/*.js',
            styles: 'src/styles/**/*.scss',
            partials:'src/partials/**/*.html',
            index:'src/index.html'
        },
        dest:{
            script:'dist/js/',
            style:'dist/css/',
            partials:'dist/partials',
            index:'.'
        }
    },
    common: {
    bowerDir: 'bower_components',
        bower: ['bower.json', '.bowerrc']
    }
};
gulp.task('sass', function(){
    var sassConfig = {
        includePaths: [
            config.common.bowerDir + '/bootstrap-sass-official/assets/stylesheets',
            config.common.bowerDir + '/fontawesome/scss'
        ]
    };
    if(env === 'production'){
        sassConfig.outputStyle = 'compressed';

    }else{
        sassConfig.sourceComments = 'map';
    }
    gulp.src(config.ui.src.styles)
        .pipe(sass(sassConfig))
        .pipe(gulp.dest(config.ui.dest.style));
});
gulp.task('partials', function(){
    gulp.src(config.ui.src.partials)
        .pipe(gulp.dest(config.ui.dest.partials));
});
gulp.task('icons', function() {
    gulp.src(config.common.bowerDir + '/fontawesome/fonts/**.*')
        .pipe(gulp.dest('./dist/fonts'));
});
gulp.task('bower', function(){
    var jsFilter = gulpFilter('**/*.js');
    var cssFilter = gulpFilter('**/*.css');
    return gulp.src(bower())
        .pipe(jsFilter)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(cssFilter)
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('dist/js'));
});
gulp.task('minifyHtml', function(){
    gulp.src(config.ui.src.index)
        .pipe(gulp.dest(config.ui.dest.index));
});
gulp.task('script', function(){
    gulp.src(config.ui.src.scripts)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(config.ui.dest.script));
});
gulp.task('watch', function(){
    gulp.watch(config.ui.src.scripts,['script']);
    gulp.watch(config.ui.src.styles,['sass']);
    gulp.watch(config.ui.src.partials,['partials']);
    gulp.watch(config.ui.src.index,['minifyHtml']);

});
gulp.task('default', ['sass','bower','partials','icons','minifyHtml','script']);