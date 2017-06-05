var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();

//修改事件监听最大数量，默认10个
life.setMaxListeners(11);//如果不设置这个，如果超过10个监听有可能会造成内存泄漏
//(node:23348) Warning: Possible EventEmitter memory leak detected. 11 show listeners added. Use emitter.setMaxListeners() to increase limit
//addEventListener
function water(who){
	console.log('给'+ who + '倒水');
}

life.on('show',water)
life.on('show',function(who){
	console.log('给'+ who + '洗脚');
})
life.on('show',function(who){
	console.log('给'+ who + '刷牙');
})
life.on('show',function(who){
	console.log('给'+ who + '喂水');
})
life.on('show',function(who){
	console.log('给'+ who + '做饭');
})
life.on('show',function(who){
	console.log('给'+ who + '遛狗');
})
life.on('show',function(who){
	console.log('给'+ who + '逗猫');
})
life.on('show',function(who){
	console.log('给'+ who + '玩耍');
})
life.on('show',function(who){
	console.log('给'+ who + '。。。9');
})
life.on('show',function(who){
	console.log('给'+ who + '。。。10');
})
life.on('show',function(who){
	console.log('给'+ who + '。。。11');
})
life.on('show2',function(who){
	console.log('给'+ who + '看电视');
})
life.on('show2',function(who){
	console.log('给'+ who + '刷牙');
})
life.on('show2',function(who){
	console.log('给'+ who + '洗脸');
})

//移除监听函数
life.removeListener('show',water);//移除监听函数是，必须使用具名函数，不能使用匿名函数
//批量移除
life.removeAllListeners('show');//如果不加名字，会移除emit上所有的事件

//查看还有多少监听
console.log(life.listeners('show').length);
//console.log(EventEmitter.listenerCount(life,'show'));

//life.emit('show','汉子');//emit回调

var hsaConfortListener = life.emit('show','汉子');
var hasLovedListener = life.emit('show2','妹子');
//var hasPlayedListener = life.emit('show3','妹子和汉子')
//判断show事件有没有被监听过，并打印出来
console.log(hsaConfortListener);
//console.log(hasLovedListener);
//console.log(hasPlayedListener);