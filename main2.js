var aText = new Array(
"<b>March 19th, 4033</b>",
" ",
"Daisy asked me to play by the river and explore the forest. We each took an apple and raced towards the woods. While playing around we saw a blue butterfly fly towards Tibbers and sit on his nose. Daisy started chasing after the butterfly. I told her not to go there. I told her that it's dangerous. The water was too deep! I really tried to save her. When she was holding on to Tibbers, so she doesnt get pulled into the water, I was trying my best to hold onto his leg. But he was about to rip... so the fire came.",
" ",
" ",
"<b>March 20th, 4033</b>",
" ",
"Leanna called me evil. She screamed at me all day and all night, telling me I killed Daisy. I told her I tried to save her, but she didnt believe me. She hit me until Papa came to stop her. I <b>hate</b> Leanna.",
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
  $('#mybutton').hide().delay(48000).fadeIn(2200);
});
