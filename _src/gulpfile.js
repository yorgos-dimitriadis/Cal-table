// Include gulp
var gulp = require('gulp');
// Include plugins
var concat = require('gulp-concat');
var concat_util = require('gulp-concat-util');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var jsFiles = [
  //'javascripts/jquery-1.11.3.min.js',
  //'javascripts/jquery-migrate-1.4.1.min.js',
  'javascripts/bootstrap.min.js',
  //'javascripts/jquery-cookie.min.js',
  'javascripts/device.min.js',
  //'javascripts/jquery.matchHeight-min.js',
  //'javascripts/jquery.equalheights.min.js',
  //'javascripts/jquery.ba-resize.min.js',
  //'javascripts/jquery.easing.min.js',
  //'javascripts/jquery.touchSwipe.min.js',
  //'javascripts/photoswipe.min.js',
  //'javascripts/photoswipe-ui-default.min.js',
  //'javascripts/rd-input-label.min.js',  
  //'javascripts/jquery.form.min.js',
  //'javascripts/rd-form-validator.min.js',
  //'javascripts/rd-mailform.all.js',
  //'javascripts/clipboard.min.js',
  //'javascripts/select2.min.js',
  //'javascripts/regula.min.js',
  //'javascripts/prettyComments.min.js',
  //'javascripts/wow.min.js',
  //'javascripts/isotope.pkgd.min.js',
  //'javascripts/isotope.pkgd-3.0.2.min.js',
  //'javascripts/smoothscroll.min.js',
  //'javascripts/jquery.ui.totop.min.js',
  //'javascripts/jquery.easy-responsive-tabs.min.js',
  //'javascripts/swiper.min.js',
  //'javascripts/progressbar.min.js',
  //'javascripts/jquery.countTo.min.js',  
  //'javascripts/jquery.counter.js',
  //'javascripts/jQuery.MagnifierRentgen.min.js',
  //'javascripts/jquery.elevatezoom.js',
  //'javascripts/jquery.elevateZoom-3.0.8.min.js',
  //'javascripts/jquery.owl-carousel.min.js',
  //'javascripts/scrollTo.js',  
  //'javascripts/timecircles.js',  
  //'javascripts/jquery.magnific-popup.min.js',
  //'javascripts/jquery.stacktable.min.js',
  //'javascripts/rd-video.min.js',
  //'javascripts/jquery.vide.min.js',
  //'javascripts/slick.min.js'                  
];

var twbsFiles = [
  'javascripts/twbs/transition.js',
  'javascripts/twbs/alert.js',
  'javascripts/twbs/button.js',
  'javascripts/twbs/carousel.js',
  'javascripts/twbs/collapse.js',
  'javascripts/twbs/dropdown.js',
  'javascripts/twbs/modal.js',
  'javascripts/twbs/tooltip.js',
  'javascripts/twbs/popover.js',
  'javascripts/twbs/scrollspy.js',
  'javascripts/twbs/tab.js',
  'javascripts/twbs/affix.js'
];


// Concatenate & Minify JS
gulp.task('def_scripts', function() {
    return gulp.src(jsFiles)
      .pipe(concat('core.min.js'))
      //.pipe(rename({suffix: '.min'}))
      //.pipe(uglify())
      .pipe(gulp.dest('../assets/js'));
});

gulp.task('twbs_scripts', function() {
    return gulp.src(twbsFiles)
      .pipe(concat_util('bootstrap.js'))
      .pipe(rename({suffix: '-custom.min'}))
      .pipe(uglify())
      .pipe(gulp.dest('../assets/js'));
});


// Default Task
gulp.task('default', ['def_scripts']);

// Twitter Bootstrap build Task
gulp.task('twbs', ['twbs_scripts']);