// Variables -----------------------------------------------------------------------------------------------------------
var gulp = require ('gulp');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
// var babel = require('gulp-babel');
// var browserify = require('gulp-browserify');
var webpack = require('webpack-stream');
var historyApiFallback = require('connect-history-api-fallback');

// Destination Variables -----------------------------------------------------------------------------------------------

var jsxDest ='';
var cssDest ='';

// End of Variables ----------------------------------------------------------------------------------------------------


// Declarations --------------------------------------------------------------------------------------------------------
// GULP WATCH IS COMMENTED OUT FOR THIS PROJECT -----------------------
// gulp.task('watch', function(){
//    gulp.watch(['scss/*.scss'], ['sass-process']);
//    // gulp.watch(['./js/*.js'], ['uglify']); ---- Commented out because we are not going to use it on project 3.
//    gulp.watch(['jsx/*.jsx'], ['compile-react']);
//    gulp.watch(['./build/*.js', './build/*.css', 'index.html']).on('change', browserSync.reload);
// });
//This task watchs files for changes, and reloads the browser page when a change has been made and saved. -------

// GULP UGLIFY IS COMMENTED OUT FOR THIS PROJECT -----------------------
// gulp.task('uglify', function(){
//    gulp.src('./js/*.js')
//    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
//    .pipe(uglify())
//    .pipe(gulp.dest('./build'));
// });
//This task ugilifies the javascript file, and stores it in the build/js folder. --------


//---- Commented out because we are not going to use it on project 3.
// gulp.task('browserSync', function(){
//    browserSync.init({
//       server: {
//          baseDir:'./'
//       }
//    });
// });
// This task runs browserSync on it's own. --------

gulp.task('sass-process', function(){
   gulp.src('./scss/main-style.scss')
   .pipe(plumber())
   .pipe(sass())
   .pipe(autoprefixer({
      browsers: ['last 2 versions']}))
      .pipe(gulp.dest('./build'))
      .pipe(minifyCSS())
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest('./build'));
   });
   //This task takes a SASS file, adds vender prefixes, compiles it, minifies it, and stores it in the build/css folder.

gulp.task('copy-html', function() {
   gulp.src('./index.html')
   .pipe(gulp.dest('./build'));
});

// for some reason, compile is not naming the compiled .js to main.js.
   gulp.task('compile-react', function() {
      gulp.src('./jsx/*.jsx')
      .pipe(plumber())
      .pipe(webpack({
         output: {
            filename: 'main.js'
         },
         module: {
            loaders: [{
               test:/\.jsx?$/,
               exclude: /node_modules/,
               loader: 'babel-loader',
               query: {
                  presets: ['es2015', 'react']
               }
            }]
         }

      }))
      .pipe(gulp.dest('./build'));
   });

   gulp.task('browserSync', ['compile-react'], function() {

      browserSync.init({
         server: {
            baseDir:'./build',
         middleware: [historyApiFallback()]
      }
      });
      gulp.watch(['scss/*.scss'], ['sass-process']);
      gulp.watch('./jsx/**/*.jsx', ['compile-react']);
      gulp.watch('index.html', ['copy-html']);
      gulp.watch(['build/*.js', 'build/*.min.css', 'build/index.html']).on('change', browserSync.reload);
   });

   //End of Declarations --------------------------------------------------------------------------------------------------


   // Function Calls ------------------------------------------------------------------------------------------------------
   gulp.task('default', ['browserSync']);


   //End of Function Calls ------------------------------------------------------------------------------------------------
