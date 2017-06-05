crawler.jsvar http = require('http');//require   http 模块
var url = 'http://www.imooc.com/learn/348'; //把网址粘贴下来赋值一个变量

http.get(url,function(res){//http.get(url,"回调方法")
	var html = '';//默认空字符串

	res.on('data',function(data){//当html有data事件触发的时候，使用回调函数
		html+=data; //不断被触发，html不断被累加
	})

	res.on('end',function(){
		console.log(html);
	})
}).on('error',function(){//error事件
	console.log("获取课程数据出错！");
})