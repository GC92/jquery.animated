var
	gulp = require('gulp'),
	gutil = require('gulp-util'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	jscs = require('gulp-jscs'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish');

gulp.task('uglify', function () {
	gulp.src(['jquery.animated.js'])
		.pipe(uglify({preserveComments: 'some'}))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./'));
});

gulp.task('jscs', function () {
	gulp.src(['jquery.animated.js'])
		.pipe(jscs().on('error', function (error) {
			gutil.log(error.message);

			this.emit('end');
		}));
});

gulp.task('jshint', function () {
	gulp.src(['jquery.animated.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function () {
	gulp.watch('jquery.animated.js', ['default']);
});

gulp.task('default', [
	'uglify',
	'jscs',
	'jshint'
]);
