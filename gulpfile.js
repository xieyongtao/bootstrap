/*
* @Author: Tao
* @Date:   2017-07-19 11:30:59
* @Last Modified by:   Tao
* @Last Modified time: 2017-07-19 15:29:22
*/

'use strict';


var gulp = require('gulp');  		//api
var less = require('gulp-less');
var path = require('path');
var cssnano = require('gulp-cssnano');

gulp.task('init', function() {
	// 第一个参数 源文件路径
	// 第二个参数 执行调用方法名称
	gulp.watch('css_yuan/*.html', ['default']);
	gulp.watch('css_yuan/*.less', ['less']);
});

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
 	// console.log('dddd');
	gulp.src('css_yuan/*.html') // 匹配所有后缀为html文件
	  .pipe(gulp.dest('css/'));  // 写入

});

gulp.task('less', function () {
  return gulp.src('css_yuan/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('css/'));
});





