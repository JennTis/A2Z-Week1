


//vowels
//Arthur Rimbaud

//A Black, E white, I red, U green, O blue : vowels,
// I shall tell, one day, of your mysterious origins:
// A, black velvety jacket of brilliant flies
// Which buzz around cruel smells,
//
// Gulfs of shadow; E, whiteness of vapours and of tents,
// Lances of proud glaciers, white kings, shivers of cow-parsley;
// I, purples, spat blood, smile of beautiful lips
// In anger or in the raptures of penitence;
//
// U, waves, divine shudderings of viridian seas,
// The peace of pastures dotted with animals, the peace of the furrows
// Which alchemy prints on broad studious foreheads;
//
// O, sublime Trumpet full of strange piercing sounds,
// Silences crossed by Worlds and by Angels:
// O the Omega, the violet ray of Her Eyes!

var words = ["A ","black, ","E ","white, ","I ","red, ","U ","green, ","O ","blue ",": vowels, "];
var words1= ["I"," shall ","tell, ","one ","day, ","of ","your ","mysterious ","origins "];
var words2= ["A, ","black ","velvety ","jacket ","of ","brilliant ","flies "];
var words3= ["Which ","buzz ","around ","cruel ","smells, "];
var words4 =["Gulfs ","of ","shadow; ","E, ","whiteness ","of ","vapours ","and ","of ","tents; "];
var words5= ["Lances ","of ","proud ","glaciers, ","white ","kings ","shivers, ","of ","cow-parsley; "];
var words6= ["I, ","purples, ","spat ","blood, ","smile ","of ","beautiful ","lips; "];
var words7= ["In ","anger ","or ","in ","the ","raptures ","of ","penitence; "];
var words8= ["U, ", "waves, ", "divine ","shudderings ","of ","viridian ","seas, "];
var words9= ["The ","peace ","of ","pastures ","dotted ","with ","animals, ","the ","peace ","of ","the ","furrows "];
var words10= ["Which ","alchemy ","prints ","on ","broad ","studious ","foreheads; "];
var words11= ["O, ", "sublime ", "Trumpet ","full ","of ","strange ","piercing ","sounds, "];
var words12= ["Silences ","crossed ","by ","Worlds ","and ","by ","Angels; "];
var words13= ["O ","the ","Omega, ","the ","violet ","ray ","of ","Her ","Eyes! "];


function changeColor() {
  var word = this.html();
  if (word == "A " || word == "A, " || word == "black, " || word == "black ") {
    this.style('color', '#161621');
  }
    else if (word == "E " || word == "E, " || word == "white, " || word == "whiteness " || word =="white ") {
    this.style('color', "#E0E0E0");
  }
    else if (word == "I " || word == "I, " || word == "red, " || word == "purples, ") {
    this.style('color', "#6A0136");
  }
    else if (word == "U " || word == "U, " || word == "green, " || word == "viridian ") {
      this.style('color', "#40826D");
  }
    else if (word == "O " || word == "blue " || word == "O, " || word == "violet ") {
    this.style('color', "#274C77");
  }
    else {
    this.style('color', '#9AA0A8');
  }
}

// function switchColor() {
//   var word = this.html();
//   if (word == "black, " || word == "black " || word == "white, " || word == "whiteness " || word =="white "
//   || word == "red, " || word == "purples, " || word == "green, " || word == "viridian " || word == "blue "
//   || word == "violet ") {
//     this.style('color', "#000000");
//   }
// }

function setup() {
	noCanvas();
	
	var par1 = select("#words");
	var par2 = select("#words1");
	var par3 = select("#words2");
	var par4 = select("#words3");
	var par5 = select("#words4");
	var par6 = select("#words5");
	var par7 = select("#words6");
	var par8 = select("#words7");
	var par9 = select("#words8");
  var par10 = select("#words9");
  var par11 = select("#words10");
  var par12 = select("#words11");
  var par13 = select("#words12");
  var par14 = select("#words13");


	for (var i = 0; i < words.length; i++) {
    var word = createSpan(words[i]);
    word.parent(par1);
    word.mouseOver(changeColor);
    // word.mousePressed(switchColor);
  }

	for (var i = 0; i < words1.length; i++) {
		var word1 = createSpan(words1[i]);
		word1.parent(par2);
    word1.mouseOver(changeColor);
	}

	for (var i = 0; i < words2.length; i++) {
		var word2 = createSpan(words2[i]);
		word2.parent(par3);
		word2.mouseOver(changeColor);
	}

	for (var i = 0; i < words3.length; i++) {
		var word3 = createSpan(words3[i]);
		word3.parent(par4);
    word3.mouseOver(changeColor);

	}
	for (var i = 0; i < words4.length; i++) {
		var word4 = createSpan(words4[i]);
		word4.parent(par5);
		word4.mouseOver(changeColor);

	}
	for (var i = 0; i < words5.length; i++) {
		var word5 = createSpan(words5[i]);
		word5.parent(par6);
		word5.mouseOver(changeColor);

	}
	for (var i = 0; i < words6.length; i++) {
		var word6 = createSpan(words6[i]);
		word6.parent(par7);
		word6.mouseOver(changeColor);

	}
	for (var i = 0; i < words7.length; i++) {
		var word7 = createSpan(words7[i]);
		word7.parent(par8);
    word7.mouseOver(changeColor);

	}
	for (var i = 0; i < words8.length; i++) {
		var word8 = createSpan(words8[i]);
		word8.parent(par9);
		word8.mouseOver(changeColor);

	}
  for (var i = 0; i < words9.length; i++) {
		var word9 = createSpan(words9[i]);
		word9.parent(par10);
		word9.mouseOver(changeColor);

	}
  for (var i = 0; i < words10.length; i++) {
		var word10 = createSpan(words10[i]);
		word10.parent(par11);
		word10.mouseOver(changeColor);

	}
  for (var i = 0; i < words11.length; i++) {
		var word11 = createSpan(words11[i]);
		word11.parent(par12);
		word11.mouseOver(changeColor);

	}
  for (var i = 0; i < words12.length; i++) {
    var word12 = createSpan(words12[i]);
    word12.parent(par13);
    word12.mouseOver(changeColor);

  }
  for (var i = 0; i < words13.length; i++) {
    var word13 = createSpan(words13[i]);
    word13.parent(par14);
    word13.mouseOver(changeColor);

  }

}
