//window: variable that take different superpowers(methods)
// alert(): a method that display a primitive alert in your internet browser
//window.alert("im hungry")

// datatype are the basic of any PL
var student = "Sandhya"; //string datatype = Sentence

var studentage = 25; //integer int = number

var avrgnotes = 88.15; //float


var no = "$"; //char

var doyoulovecode = true;//boolean

var classlist =  ["Ginema", "Shanthi", "Rene"];

/**todo: print the first variable , with the third variable
in the same output message, and add to it the second value from the array of string**/
console.log("student name is:" ,student.toUpperCase(), "her best friend is:" , classlist[1])
function RandomColor(){
 document.getElementById("ColoredText").style.color = color();
}
function Color(){
    return "#" + Math.floor(Math.random() * 16777215).toString(16)
}
// FunctionName() = parameters
// [] = Arrays | List's
// { } = Body of function algorithm | .format()
// < > = html tags only!
