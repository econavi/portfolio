/* assets */ 

const gulp = require('gulp');
const newer = require('gulp-newer');


module.exports = () => (
	gulp.src('app/catalog/**/*', { base: 'app/'})
	.pipe(newer('public/'))
	.pipe(gulp.dest('public/'))
)
