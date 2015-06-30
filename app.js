var questions = [
  ['How old is Homer?', 38],
  ['Homer lives at ___ Evergreen Terrace?', 742],
  ['Homer works in sector ___G?', 7],
  ['How many kids does Homer Have?', 3]
];

var correct = 0;
var right = []
var wrong = []

function print(message) {
  document.write(message);
}

function buildList(array) {
	var listHTML = '<ol>';
		for (var i = 0; i < array.length; i += 1){
			listHTML += '<li>' + array[i] + '</li>'
		}
		listHTML += '</ol>'
		return listHTML;
}

for (var i = 0; i < questions.length; i += 1){
  var question = questions[i][0];
  var answer = questions[i][1];
  var response = parseInt(prompt(question));
  if (response === answer) {
  	correct += 1;
  	right.push(question);
  } else {
  	wrong.push(question)
  }
}

var html = "You got " + correct + "out of 4 right";
html += '<h2>You got these ones right!</h2>';
html += buildList(right);
html += '<h2>You got these ones wrong...</h2>';
html += buildList(wrong);
print(html)