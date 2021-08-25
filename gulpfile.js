const gulp = require('gulp');
const imagemin = require('imagemin');
const uglify = require('uglify');

gulp.task('message', function(){
  return console.log('it is working...');
});

// copy html files
gulp.task('copyHtml', function ()
{
  gulp.src('src/*.html')
    .pipe(gulp.dest('build'))
});

// optimize images
gulp.task('imageMin', () =>
  gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/images'))
);

// minify js
gulp.task('minify', function() {
  gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
});

// compile sass
gulp.task('sass', function (){
  gulp.src('src/sass/*.sass')
    .pipe(uglify())
    .pipe(gulp.dest('build/sass'))
});


gulp.task('default', function ()
{
  return console.log('it is working...');
});