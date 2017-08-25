//create an array of words and choose them randomly

var words = ["cat","dog","house","car","television"];

randNum = Math.floor(Math.random() * words.length);
console.log(randNum);

let selectWord = words[randNum];
underscore = [];
console.log(randNum);

//create underscore based on the lenght of the word

docUnderScore = document.getElementsByClassName('underScore');
(
generateUnderScore = () => {
	for( i=0; i < randNum.length; i ++){
		underScore('_');
		docUnderScore[0].innerHTML=underscore(' ');
	}
	return underscore;

}



//user guess

document.addEventListener('keypress', (event) => {

	let keycode = event.keycode;
	let keyword = string.fromCharCode(keyword);
	console.log(keyword);

	if(choosenWord.indexOf(keyword) > -1) {
		console.log(true);
	}
})

if rightWord.push(keyword);
console.log(rightWord);
else wrongWord.push(keyword);
console.log(wrongWord);

document.addEventListener('Keypress'(event) => {
	let keyword=string.fromCharCode(event.keycode);

// If the user guess right
	if (choosenWord.indexOf(keyword) >-1){
		rightWord.push(keyword);

		underScore[choosenWord.indexOf(keyword)] = keyword;

		if (underScore.join('') == choosenWord) {
			alert('You Win!!!');
		}
	}else{
		wrongWord.push(keyword);
	}
}

