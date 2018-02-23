var aText = new Array(
"<b>September 30th, 4033</b>",
" ",
"Monster... The monster who killed Daisy. The monster no one loves... I didn\'t notice my power slipping out around me, setting everything aflame. Papa banged on my door but it was too late. Fire surrounded me. I was too scared. I didn\'t know what to do... Papa ran into the room, grabbed me and started running. The roof suddenly collapsed and he threw me forward while the wood crushed him.",
" ",
"\"I love you\"",
" ",
" ",
" ",
" ",
" ",
" ",
"When I woke up, Leanna was crying in front of the ashes. I walked towards her and she slapped me. \"YOU MONSTER! YOU KILLED MY WHOLE FAMILY, WHAT MORE DO YOU WANT?\" she ripped Tibbers from my hands and began tearing it apart. Stop. Stop. Stop. Stop. Stop. <b>STOP. STOP. STOP. STOP. STOP. STOP. STOP. STOP. STOP. STOP. STOP. STOP. STOP. STOP.</b>",
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
  $('#mybutton').hide().delay(50000).fadeIn(2200);
});
