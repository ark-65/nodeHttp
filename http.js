var http = require('http');

http
	.createServer(function(request,response){//用http的createServer起一个服务器
		//使用一个回调方法，在这个回调方法里面，我们对每一个进来的请求进行处理
		response.writeHead(200,{'Content-Type':'text/plain'})//返回一个响应头，设置返回内容的文本类型

		response.write('Hello Nodejs')//入响应的主体

		response.end()//结束响应
	})
	.listen(2015)//启动服务器监听端口