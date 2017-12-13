const gulp = require('gulp');
const babel = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const notify = require('gulp-notify');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('markup', () => {
    return gulp.src('dev/*.html')
        .pipe(gulp.dest('public'));
});

gulp.task('assets', () => {
	return gulp.src('dev/images/*')
	.pipe(gulp.dest('public/images'))
});

gulp.task('styles', () => {
	return gulp.src('./dev/styles/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(concat('style.css'))
		.pipe(gulp.dest('public/styles'))
});

gulp.task('js', () => {
	return browserify('dev/scripts/main.js', {debug: true})
		.transform('babelify', {
			sourceMaps: true,
			presets: ['env']
		})
		.bundle()
		.on('error',notify.onError({
			message: "Error: <%= error.message %>",
			title: 'Error in JS 💀'
		}))
		.pipe(source('main.js'))
		.pipe(buffer())
		.pipe(gulp.dest('public/scripts'))
		.pipe(reload({stream:true}));
});

gulp.task('bs', () => {
	return browserSync.init({
		server: {
			baseDir: 'public'
		},
		notify: false
        // browser: 'firefox'
	});
});

gulp.task('default', ['js','markup','styles','assets','bs'], () => {
	gulp.watch('dev/**/*.js',['js']);
    gulp.watch('dev/**/*.scss',['styles']);
    gulp.watch('dev/*.html', ['markup', reload]);
	gulp.watch('public/styles/style.css', reload);
});