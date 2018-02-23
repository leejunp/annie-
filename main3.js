var aText = new Array(
"<b>September 30th, 4033</b>",
" ",
"Leanna doesn\'t talk to me anymore. She just gives me mean looks and cries all the time. I thought adults weren\'t supposed to act like a baby. Papa and Leanna were fighting again and I was curious about what they were saying, so I hid behind the door.",
" ",
"<b>\"SHE IS A MONSTER!\"</b>",
" ",
"Her eyes were as red as fire and she was screaming at Papa.",
" ",
"Am I... a monster?",
);
var iSpeed = 55;
var iIndex = 0;
var iArrLength = aText[0].length;
var iScrollAt = 20;

var iTextPos = 0;
var sContents = '';
var iRow;

function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");

 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}

$(document).ready(function() {
  $('#mybutton').hide().delay(26000).fadeIn(2200);
});
