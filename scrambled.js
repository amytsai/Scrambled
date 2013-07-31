function ScrambleMe() {
	var inputString = $('textarea').val();
	$('textarea').val('');
	console.log(inputString);
	document.getElementById("output").innerHTML = scramble(inputString);
}

function scramble(input) {
	var words = input.split(" ");
	var result = "";
	for(var i = 0; i < words.length; i++) {
		var word = words[i];
		result += mixUp(word) + " ";
		console.log(result);
	}
	result.trim();
	return result;
}

function mixUp(word) {
	if(word.length < 4) {
		return word;
	}
	else {
		var start = 0;
		var end = word.length - 1;
		isLetter(word.charAt(start));
		while (isLetter(word.charAt(start)) === false) {
			start++;
		}
		while(isLetter(word.charAt(end)) === false){
			end--;
		}
		var middle = word.substring(start+1, end);
		middle = middle.shuffle();
		/*var firstletter = middle.slice(0,1);
		var remaining = middle.slice(1, middle.length);
		var middle = remaining + firstletter;*/
		var result = word.substring(0, start+1) + middle + word.substring(end, word.length);
		console.log("RESULT: " + result);
		return result;
	}	

}

String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

function isLetter(letter) {
	var newletter = letter.toUpperCase();
	console.log("char code of " + newletter + " is: " + newletter.charCodeAt(0));
	if (letter.charCodeAt(0) > 64 && newletter.charCodeAt(0) < 91) {
		return true;
	}
	else {
		return false;
	}
}

$(document).ready(function(){

});