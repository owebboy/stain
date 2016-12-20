/*
	GULPFILE.JS
	owebboy
*/

/* gulp and pluins ----------------------------------------- */
var gulp 				= require('gulp'),
    yaml 				= require('gulp-yaml'),
		cssmin 			= require('gulp-cssmin'),
		rename 			= require('gulp-rename'),
		webserver 	= require('gulp-webserver');

/* yaml to json to css to minifcation ---------------------------- */
gulp.task('tojson', function()
{
  gulp.src('./palette.yml')
	  .pipe(yaml({ schema: 'DEFAULT_FULL_SCHEMA' }))
	  .pipe(gulp.dest('./'));
});

/* webserver ----------------------------------------------- */
gulp.task('webserver', function()
{
	gulp.src('./')
		.pipe(webserver({
			livereload: false,
			directoryListing: false,
			open: true,
			port: 9000
		}));
});

/* default task -------------------------------------------- */
gulp.task('default', ['webserver', 'tojson'], function()
{
	gulp.watch('./palette.yml', ['tojson']);
});
