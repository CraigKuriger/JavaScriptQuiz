var quiz = [
  {
    question: 'How old is Homer?', 
    answer: 38
  },
    {
    question: 'Homer lives at ___ Evergreen Terrace?', 
    answer: 742
  },
    {
    question: 'Homer works in sector ___G?', 
    answer: 7
  },
    {
    question: 'How many kids does Homer Have?', 
    answer: 3
  }
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

for (var i = 0; i < quiz.length; i += 1){
  var question = quiz[i].question;
  var answer = quiz[i].answer;
  var response = parseInt(prompt(question));
  if (response === answer) {
  	correct += 1;
  	right.push(question);
  } else {
  	wrong.push(question)
  }
}

var html = "You got " + correct + " out of 4 right";
html += '<h2>You got these ones right!</h2>';
html += buildList(right);
html += '<h2>You got these ones wrong...</h2>';
html += buildList(wrong);
print(html)