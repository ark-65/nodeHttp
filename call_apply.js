var pet = {
	words:'...',
	speak:function(say){
		console.log(say + ' ' + this.words);
	}
}

// pet.speak('Speak');

var dog = {
	words:'Wang'
}

pet.speak.call(dog,'Speak');//call改变了执行上下文，call参数列表 ，apply 一个数组