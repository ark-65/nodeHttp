var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
	'content':'这是一个测试',
	'cid':348
})

var options = {
	hostname:'www.imooc.com',
	port:80,
	path:'/course/docomment',
	method:'POST',
	headers:{
		'Accept':'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.8',
		'Connection':'keep-alive',
		'Content-Length':postData.length,
		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie':'imooc_uuid=6fdfc536-d2e7-4b71-823f-f9de2b4eb6d8; imooc_isnew_ct=1492650435; PHPSESSID=tid39auu6eeoks1recafvqr475; loginstate=1; apsid=FjMTExZjRjYjA0YTU3MjZiOWNmYzQxODcxYThmOGMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDMwMTg2OQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGM4MmQ3ZGQ5MTYzMTQ1NjlmNGM2OTQ1N2NiM2VkNTgxOxE1WTsRNVk%3DZD; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1496287491,1496368296,1496648304,1496648974; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1496653824; IMCDNS=0; imooc_isnew=2; cvde=59350cea935ce-69',
		'Host':'www.imooc.com',
		'Origin':'http://www.imooc.com',
		'Referer':'http://www.imooc.com/comment/348',
		'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.110 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest',
	}
}



var req = http.request(options,function(res){
	console.log('Status:'+res.statusCode);//网络请求建立成功的状态码
	console.log('headers:'+JSON.stringify(res.headers));

	res.on('data',function(chunk){
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk);
	})

	res.on('end',function(){
		console.log('评论完毕');
	})


})

req.on('error',function(e){
	console.log('Error:'+e.message);
})

req.write(postData);
req.end();