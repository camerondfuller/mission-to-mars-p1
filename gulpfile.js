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

gulp.task('copy-html', function() {
   gulp.src('./index.html')
   .pipe(gulp.dest('./build'));
});

gulp.task('compile-react', function() {
   gulp.src('./jsx/*.jsx')
   .pipe(plumber())
   .pipe(webpack({
      output: {
         filename: 'main.js'
      },
      debug:true,
      devtool:'inline-source-map',
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
