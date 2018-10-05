var gulp = require('gulp'),
	sass = require('gulp-sass');

var sassConfig = {
	inputDirectory: 'resources/sass/**/*.scss',
	outputDirectory: 'assets/css',
	options: {
		outputStyle: 'expanded'
	}
}

gulp.task('build-css', function() {
	return gulp
		.src(sassOptions.inputDirectory)
		.pipe(sass(sassConfig.options).on('error', sass.logError))
		.pipe(gulp.dest(sassConfig.outputDirectory);
});

gulp.task('watch', function() {
	gulp.watch('resources/sass/**/*.scss', ['build-css']);
});