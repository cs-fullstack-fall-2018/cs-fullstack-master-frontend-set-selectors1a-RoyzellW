/* Style the HTML elements according to the following instructions.
DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!
*/


/* Give the <body> element a background of #bdc3c7*/

document.body.style.backgroundColor = "#bdc3c7";


/* Make the <h1> element #9b59b6*/

var allH1tags = document.querySelector("h1");
allH1tags.style.color = "#9b59b6";

/* Make all <h2> elements orange */

var allH2Tags = document.getElementsByTagName("h2");

for(var i = 0; i<allH2Tags.length; i++)
{
    allH2Tags[i].style.color = "orange";
}

/* Make all <li> elements blue(pick your own hexadecimal blue)*/


var allLiTags = document.getElementsByTagName("li");

for(var v = 0; i<allLiTags.length; v++)
{
    allLiTags[i].style.color = "#0000ff";
}


/*Change the background on every paragraph to be yellow*/

var allpTags = document.getElementsByTagName("p");
allpTags[8].style.backgroundColor = "yellow";


/*Make all inputs have a 3px red border*/


/* Give everything with the class 'hello' a white background*/


/* Give the element with id 'special' a 2px solid blue border(pick your own rgb blue)*/


/*Make all the <p>'s that are nested inside of divs 25px font(font-size: 25px)*/
