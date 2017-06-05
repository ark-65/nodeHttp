//情况1

// var pet = {
// 	words:'...',
// 	speak:function(){
// 		console.log(this.words);
// 		console.log(this===pet);
// 	}
// }

// pet.speak();


//情况2
// function pet(words){
// 	this.words = words;

// 	console.log(this.words);
// 	console.log(this===global);//this指向的是globle
// }
// pet('...');

//情况3

function Pet(words){
	this.words = words;
	this.speak = function(){
		console.log(this.words);
		console.log(this);
	}
}

var cat = new Pet('Miao');
cat.speak();