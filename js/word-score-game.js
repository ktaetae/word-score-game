var BAG_OF_LETTERS = [
		new Letter('_', 2, 0),
		new Letter('_', 2, 0),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('B', 2, 3),
		new Letter('B', 2, 3),
		new Letter('C', 2, 3),
		new Letter('C', 2, 3),
		new Letter('D', 4, 2),
		new Letter('D', 4, 2),
		new Letter('D', 4, 2),
		new Letter('D', 4, 2),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('F', 2, 4),
		new Letter('F', 2, 4),
		new Letter('G', 3, 2),
		new Letter('G', 3, 2),
		new Letter('G', 3, 2),
		new Letter('H', 2, 4),
		new Letter('H', 2, 4),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('J', 1, 8),
		new Letter('K', 1, 5),
		new Letter('L', 4, 1),
		new Letter('L', 4, 1),
		new Letter('L', 4, 1),
		new Letter('L', 4, 1),
		new Letter('M', 2, 3),
		new Letter('M', 2, 3),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('P', 2, 3),
		new Letter('P', 2, 3),
		new Letter('Q', 1, 10),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('S', 4, 1),
		new Letter('S', 4, 1),
		new Letter('S', 4, 1),
		new Letter('S', 4, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('U', 4, 1),
		new Letter('U', 4, 1),
		new Letter('U', 4, 1),
		new Letter('U', 4, 1),
		new Letter('V', 2, 4),
		new Letter('V', 2, 4),
		new Letter('W', 2, 4),
		new Letter('W', 2, 4),
		new Letter('X', 1, 8),
		new Letter('Y', 2, 4),
		new Letter('Y', 2, 4),
		new Letter('Z', 1, 10),
];

var YOUR_HAND = new Array();
var SCORE = 0;
function startGame() {
	addNumbersFromBag();
	displayHand();
	
};



function addNumbersFromBag(){
	console.log("your hand has:" + YOUR_HAND.length);
	for(i=YOUR_HAND.length; i < 7; i++){
		YOUR_HAND[i] = getAvailableLetter();
	}
	
}


function displayHand(){
	console.log("your hand has:" + YOUR_HAND.length);
	for (i = 0; i < YOUR_HAND.length; i++) {

		console.log("#letter-" + (i+1) +" set to " + YOUR_HAND[i].letter);
		$( "#letter-" + (i+1)).addClass("letter-" + YOUR_HAND[i].letter);
		$( "#points-" + (i+1)).addClass("points-" + YOUR_HAND[i].pointsWhenLettersUsed);
		
		
		
		
		$( "#letter-" + (i+1)).html(YOUR_HAND[i].letter);
		
		$( "#points-" + (i+1)).html(YOUR_HAND[i].pointsWhenLettersUsed);
	}
	
}



function getAvailableLetter(){
	var randomIndex = Math.floor(Math.random() * BAG_OF_LETTERS.length);
	var randomLetter = BAG_OF_LETTERS.splice(randomIndex, 1);
	console.log(randomLetter[0]);
	return randomLetter[0];
}


function findWordToUse(){
//I'm sorry that I'm not familiar with js, so I write the code in Python.
def findWordToUse():
	codeFoundWord = ''
	WordPoints = 0
	
	word = []
	word_point = []
	word1 =[]
	word_point1 =[]
	lst =[]
	
	for i in range(len(YOUR_HAND)):		
			len_word = len(word1)
			if !len_word:
				for j in range(len(YOUR_HAND)):
					w = YOUR_HAND[j].letter
					wp = YOUR_HAND[j].pointsWhenLettersUsed
					word1.append(w)
					word_point1.append(wp)
					lst1 = []
					lst1.append(j)
					lst.append(lst1)
			else:
				for j in range(len_word):
					YOUR_HAND_co = YOUR_HAND[:]
					for x in range(len(lst[j])):
						index = lst[j][x]
						YOUR_HAND_co.pop(index)
					for y in range(len(YOUR_HAND_co)):
						wa = word1[j]+YOUR_HAND_co[y].letter
						wa_point= word_point1[j]+YOUR_HAND_co[y].pointsWhenLettersUsed
						word1.append(wa)
						word_point1.append(wa_point)
						lst1 = lst[j][:]
						lst1.append(y)
						lst.append(lst1)

			word1=word1[len_word:]
			word_point1=word_point1[len_word:]
			lst=lst[len_word:]
		Wordi = word1[:]
		w_point = word_point1[:]
		word.append(Wordi);
		word_point.append(w_point);

	for i in range(len(word)):
		for j in range( len( word[i])):
			codei = word[i][j]
			w_point = word_point[i][j]
			if isThisAWord(codei):
				if w_point > WordPoints:
					code = codei
					WordPoints = w_point
				elif w_point == WordPoints:
					if len(codei)< len(code):
						code = codei
						WordPoints = w_point

	
	if WordPoints:
		if haveLettersForWord(code):
			 successfullyAddedWord(code)
		else:
		print ("No word could be found. Please retire your hand.")

}
function humanFindWordToUse(){
	
	 var humanFoundWord = $( "#human-word-input").val();
	 console.log("Checking human workd of:" + humanFoundWord);
	 if(isThisAWord(humanFoundWord)){
		 if(haveLettersForWord(humanFoundWord)){
			 successfullyAddedWord(humanFoundWord);
		 }else{
			 alert(humanFoundWord + " - Do not have the letters for this word");
		 }
	 }else{
		 alert(humanFoundWord + " is not a valid word.");
	 }
		
}


function successfullyAddedWord(foundWord){
	$( "#word-history-list").append("<li>" + foundWord + "</li>");
	clearClasses();
	takeOutUsedLetters();
	addNumbersFromBag();
	displayHand();
	$( "#human-word-input").val('');
	
}

function addToScore(letterToAddToScore){
	SCORE = SCORE + letterToAddToScore.pointsWhenLettersUsed;
	console.log(letterToAddToScore.pointsWhenLettersUsed + "<-Points added for " + letterToAddToScore.letter);
	$( "#score-number").html(SCORE);
}


function takeOutUsedLetters(){
	
	for(ii=0; ii < YOUR_HAND.length; ii++){
		if(YOUR_HAND[ii].used){
			addToScore(YOUR_HAND[ii]);
			YOUR_HAND.splice(ii, 1);
			ii = ii-1;
		}else{
			console.log(YOUR_HAND[ii].letter + "<- Not Used");
		}
	}
	
}

function haveLettersForWord(aProposedWord){
	//You could code the _ logic could go in this function
	var wordAsArray = aProposedWord.toUpperCase().split("");
	for (i = 0; i < wordAsArray.length; i++) {
		var foundLetter = false;
		console.log(wordAsArray[i] + "<-For match");
		for(ii=0; ii<YOUR_HAND.length; ii++){
			console.log("              " + YOUR_HAND[ii].letter + "<-Checking");
			if(YOUR_HAND[ii].letter == wordAsArray [i]){
				if(!YOUR_HAND[ii].used && !foundLetter){
					console.log("     " + YOUR_HAND[ii].letter + "<-Found");
					YOUR_HAND[ii].used = true;
					foundLetter = true;
					
				}
			}
		}
		
		
		if(!foundLetter){
			resetHand();
			return false;
		}
	}
	
	return true;
}


function resetHand(){
	
	for(ii=0; ii<YOUR_HAND.length; ii++){
		YOUR_HAND[i].used = false;
	}
}

function isThisAWord(aProposedWord){
	  if (Word_List.isInList(aProposedWord)) {
	      return true;
	  }
	  return false;
}

function retireHand(){
	//Loose all the points in your hand
	clearClasses();
	YOUR_HAND = new Array();
	addNumbersFromBag();
	displayHand();
}
function clearClasses(){
	for(ii=0; ii < YOUR_HAND.length; ii++){
		$("#letter-" + (ii+1)).removeClass("letter-" + YOUR_HAND[ii].letter);
		$("#points-" + (ii+1)).removeClass("points-" + YOUR_HAND[ii].pointsWhenLettersUsed);
	}
}

$(document).ready(function() {
	startGame();
	
	$("#find-word-button").click(function() {
		findWordToUse();
	});
	$("#human-find-word-button").click(function() {
		humanFindWordToUse();
	});
	$("#retire-hand-button").click(function() {
		retireHand();
	});
	$('#human-word-input').keypress(function(event) {
		if (event.which == 13) {
			humanFindWordToUse();
		}
	});
});
