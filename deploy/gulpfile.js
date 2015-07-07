'use strict';
var gulp = require( 'gulp' );
var less = require('gulp-less');

gulp.task('less', function () {
	return gulp.src('./../src/_root.less')
		.pipe(less( ))
		.pipe(gulp.dest('./../dist'));
});

gulp.task('default', ['less']);