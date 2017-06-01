//html小爬虫

var http = require('http');//require   http 模块
var cheerio = require('cheerio');//require 进 cheerio//cnpm install cheerio -g
var url = 'http://www.imooc.com/learn/348'; //把网址粘贴下来赋值一个变量

function filterChapters(html){
	var $ = cheerio.load(html);

	var chapters = $('.chapter')

	//预期的数据格式
	// [{
	// 	chapterTitle:'',
	// 	videos:[
	// 	title:'',
	// 	id:''
	// 	]
	// }]

	var courseData = []

	chapters.each(function(item){
		var chapter = $(this);
		var chapterTitle = chapter.find('strong').text();
		var videos = chapter.find('.video').children('li');
		var chapterData = {
			chapterTitle:chapterTitle,
			videos:[]
		}
		videos.each(function(item){
			var video = $(this).find('.J-media-item');
			var videoTitle = video.text()
			var id = video.attr('href').split('video/')[1]

			chapterData.videos.push({
				title:videoTitle,
				id:id
			})
		})

		courseData.push(chapterData);
	})

	return courseData;
}

function printCourseInfo(courseData){
	courseData.forEach(function(item){
		var chapterTitle = item.chapterTitle

		console.log(chapterTitle+'\n')
		item.videos.forEach(function(video){
			console.log('【' + video.id + '】' + video.title + '\n');
		})
	})
}

http.get(url,function(res){//http.get(url,"回调方法")
	var html = '';//默认空字符串

	res.on('data',function(data){//当html有data事件触发的时候，使用回调函数
		html+=data; //不断被触发，html不断被累加
	})

	res.on('end',function(){
		var courseData = filterChapters(html)//信息过滤

		printCourseInfo(courseData);
	})
}).on('error',function(){//error事件
	console.log("获取课程数据出错！");
})