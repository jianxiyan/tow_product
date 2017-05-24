 var gulp = require('gulp');
 var connect= require('gulp-connect'); 
 
gulp.task('copy-index',function(){ 	
	return gulp.src('index.html').pipe(gulp.dest('dist')).pipe(connect.reload());
 });

gulp.task('sever',function(){ 
	connect.server({
		root:'dist',
		livereload:true 
		});
}) 

gulp.task('watch',function(){ 
	gulp.watch('index.html',['copy-index']); 
})

gulp.task('default',['sever','watch']); 

