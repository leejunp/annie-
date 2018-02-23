var aText = new Array(
"<b>March 22nd, 4031</b>",
" ",
"My mama went away one day. When Papa went on a trip, big men came to take her away. \"I\'ll be right back my love,\" she said softly as she caressed my head. Mama looked really sad that day, I think the big men were mean to her. After a few days, papa came back and he cried when I told him about ma. I think he missed her a lot. I miss her too but since Tibbers is by my side, I\'m okay.",
" ",
" ",
"<b>December 22nd, 4031</b>",
" ",
"Papa came back home with other people today. Leanna, and her daughter Daisy. He said they\'re my new family. I was happy I got a sister, now Tibbers and I can have another friend! But Leanna was mean. She said I\'m not \'normal\' and only smiled at Daisy. Tibbers doesn\'t like her either.",
" ",
" ",
"<b>January 3rd, 4032</b>",
" ",
"I was playing with Daisy today when she tried to take Tibbers away from me! Even though I told her to give him back to me, she kept teasing and made me very mad. <b>Very, very mad</b>. My powers accidentally came out when I was trying to take back Tibbers and Daisy started crying. I didn\'t even burn her! Leanna came running and screamed at me, asking me what\'s wrong with me. Papa told me it\'s okay, that it was just a mistake. Only Tibbers believed me when I said Daisy started it...",
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
  $('#mybutton').hide().delay(76000).fadeIn(2200);
});
