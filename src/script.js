/*MultiLine Comment*/
//Single Line Comment

var myname;
myname="ankit aginhotry";
var yourname;
yourname=myname;
var a=9;

var youname="Sachin Shukla";
var myFirstName="Ankit";
var myLastName="Aginhotry";

var a=5;
var b=10;
var c="I am a";


a = a + 1;
b = b + 5;
c = c + " String!";

//both are different 
var abc=0;
var ABC=0;


//this is allow in var 
var mark=0;
var mark=32;
mark=34;

//th is is valid
let marks=0;
marks=23;
//This is not valid for let
// var marks=34;

//Declare a Read-Only Variable with the const Keyword
const readonly="you can't change the value of const varible";

//Add Two Numbers with JavaScript
var num1=20;
var num2=90;
var add=num1+num2;
document.write("add :",add);


//Subtract One Number from Another with JavaScript
var num11=20;
var num22=50;

var sub=num22-num11;
document.write("Subtract One Number from Another with JavaScript: "+sub);

//Multiply Two Numbers with JavaScript
var muti1=10;
var multi2=5;
var multi=multi2*muti1;
document.write("Multiply: "+muti1);

//Divide One Number by Another with JavaScript
var num11=20;
var num22=50;

var sub=num22/num11;
document.write(sub);

//Increment a Number with JavaScript
var incre=1;
document.write(incre++);
//Decrement a Number with JavaScript
var decre=1;
document.write(decre--);
//Create Decimal Numbers with JavaScript
var deci=0.343;
document.write('\n'+deci);
//Multiply Two Decimals with JavaScript
var d1=0.9;
var d2=7.4;
document.write('\n',d1*d2);
//Divide One Decimal by Another with JavaScript
var d1,d2;
d1=23.4.d2=23.4;
console.log(d1/d2);
//Finding a Remainder in JavaScript
var rem,n1,n2;
n1=20,n2=39;
rem=n1%n2;
console.log(rem);
//Compound Assignment With Augmented Addition
let ab = 3;
let bb = 17;
let cb = 12;

ab +=12;
bb +=9;
cb +=7;
console.log(a,b,c)

//Compound Assignment With Augmented Subtraction
a -=12;
b -=9;
c -=7;
console.log(a,b,c)

//Compound Assignment With Augmented Multiplication
a *=12;
b *=9;
c *=7;
console.log(a,b,c)

//Compound Assignment With Augmented Division
a /=12;
b /=9;
c /=7;
console.log(a,b,c)

//Escaping Literal Quotes in Strings
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

//Quoting Strings with Single Quotes
var singleqoute='Quoting Strings with Single Quotes';

//Escape Sequences in Strings
const mySttr = "FirstLine\n\
        \t\SecondLine\nThirdLine";

//Concatenating Strings with Plus Operator
var str1="ankit",str2="aginhotry";
var fname=str1+str2;
console.log(fname);
//Concatenating Strings with the Plus Equals Operator
var str1="ankit";
var str2="";
var str2=str1+"";
console.log(str2);
//Constructing Strings with Variables
var str1="ankit";
var str2="";
var str2=str1+"";
console.log(str2);
//
var someAdjective= "qweer";
var myStttr = "Learning to code is ";
someAdjective+=myStr;

//Find the Length of a String
var str1="askduasdjksadaskdblasbdjnasd";
console.log("String Length: "+str1);
//Use Bracket Notation to Find the First Character in a String
var str3="ankit"
console.log(str3[0]);

//Understand String Immutability
var unsimm="ankit";
console.log(unsimm);

//you can't change the value once string is creted bca of immutable.
unsimm[0]='W';
console.log(unsimm);
//Use Bracket Notation to Find the Nth Character in a String
console.log(unsimm[3]);

//Use Bracket Notation to Find the Last Character in a String
var len=unsimm.length;
console.log(unsimm[len-1]);
//Use Bracket Notation to Find the Nth-to-Last Character in a String
var stringg="ankit aginhotry"
console.log(stringg.slice(0,3));
//Word Blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = ""+myNoun+"-"+myAdjective+"-"+myVerb+"-"+myAdverb+""; 
console.log(wordBlanks);

//Store Multiple Values in one Variable using JavaScript Arrays
const arr=['one','two','three','four','five'];
console.log(arr.slice(0,arr.length));
//Nest one Array within Another Array
const nestedarr=['one','two',[12,3,5],'three'];
console.log(nestedarr.slice(0,nestedarr.length));
//Access Array Data with Indexes
console.log(nestedarr[1]);
//Modify Array Data With Indexes
nestedarr[0]="zero";
console.log(nestedarr[0]);
//Access Multi-Dimensional Arrays With Indexes
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];
  console.log(myData);

  //Manipulate Arrays With push()
  var my=[1,2,3,4];
  console.log(my.slice(0,my.length));
  my.push(5);
  console.log(my.slice(0,my.length));

  //Manipulate Arrays With pop()
  console.log(my.pop());


  //Manipulate Arrays With shift()
  console.log(my.shift())
  console.log(my.slice(0,my.length));
  
  //Manipulate Arrays With unshift()
  console.log(my.unshift(1))
  console.log(my.slice(0,my.length));
  
  //Shopping List
  const myList = ["choco","banana","mango","orange","more"];
  console.log(myList.slice(0,myList.length));

  //Write Reusable JavaScript with Functions
  //and
  //Passing Values to Functions with Arguments
  //and
  //Return a Value from a Function with Return
  function slc(a,b,arr){
      for(var i=a;i<b;i++){
       console.log(arr[i]);
      }
      return 0;

  }

  const newarr=[1,2,3,4,5,6,7,8,9,10];
  console.log(slc(0,4,newarr));
//Global Vs Local Scope

  //Global Scope and Functions
  // Declare the myGlobal variable below this line
let myGlobal=10;
const oopsGlobal=5;

function fun1() {

}

function fun2() {
var output = "";
if (typeof myGlobal != "undefined") {
  output += "myGlobal: " + myGlobal;
}
if (typeof oopsGlobal != "undefined") {
  output += " oopsGlobal: " + oopsGlobal;
}
console.log(output);
}

//Local Scope and Functions
let dfd=0 //Global Scope
function fun(){
    let a="";// Local Scope
}

//Understanding Undefined Value returned from a Function
function undef(a){
    return a;//this will return undefine 
}

var bcb;
console.log(undef(bcb));//this will show undefine 

//Assignment with a Returned Value
// Setup
let processed = 2;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed=processArg(7);
function nextInLine(arr, item) {
    arr.push(item);
    arr.pop(item);
    return item,arr.length;
  
  }
  
  // Setup
  const testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

  //Understanding Boolean Values
  var tr=true;
  var fa=false;
  console.log(typeof(tr),typeof(fa));

  //Use Conditional Logic with If Statements
  //and
  //Comparison with the Equality Operator
  var cond=0;
  if(cond==0){
      console.log('zero');
  }
  else{
      console.log('not zero');
  }

  //Strict Equality Operator
  var cond1=0;
  if(cond===cond1){
      console.log('type and value same')
  }else{
    console.log('type and value not same')

  }

  //Practice comparing different values
  var age=17;
  if(age<18){
      console.log('eleigible for voating');
  }
  else{
    console.log('not eleigible for voating');

  }
  //Comparison with the Inequality Operator
  if(age!=18){
    console.log('eleigible for voating');
}
else{
  console.log('not eleigible for voating');

}

//Comparison with the Strict Inequality Operator
if(age!==18){
    console.log('eleigible for voating');
}
else{
  console.log('not eleigible for voating');

}
//Comparison with the Greater Than Operator
if(age<18){
    console.log('eleigible for voating');
}
else{
  console.log('not eleigible for voating');

}

//Comparison with the Greater Than Or Equal To Operator
if(age<=18){
    console.log('eleigible for voatingggggg');
}
else{
  console.log('not eleigible for voating');

}
//Comparison with the Less Than Operator
if(age>=18){
    console.log('eleigible for voatingggggg');
}
else{
  console.log('not eleigible for voating');

}

//Comparison with the Less Than Or Equal To Operator
if(age>=18){
    console.log('eleigible for voatingggggg');
}
else{
  console.log('not eleigible for voating');

}
//Comparisons with the Logical And Operator
var hff=20;
if(age==18 && hff==20){
    console.log('eleigible for voatingggggg');
}
//Comparisons with the Logical Or Operator
if(age==18 || hff==20){
    console.log('eleigible for voatingggggg');
}

//Introducing Else Statements
if(age==18 || hff==20){
    console.log('eleigible for voatingggggg');
}else{
    console.log("Not Eligible");
}

//Introducing Else If Statements
if(age==18 || hff==20){
    console.log('eleigible for voatingggggg');
}else if(age!=18){
    console.log("Not Eligible");
}
//Logical Order in If Else Statements
if(age==18 || hff==20){
    console.log('eleigible for voatingggggg');
}else if(age!=18){
    console.log("Not Eligible");
}else{
    console.log('if (if and if else) not exicuted then else exicuted');
}
//Chaining If Else Statements
if(a==12){
  console.log("12");
}
else if(a==56){
  console.log("56");

}
else{
  console.log("NAN");
}

//Golf Code
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if(strokes==1)
    {
    return names[strokes];
    }
    else if(strokes<=par-1){
      return names[strokes];
    } 
    else if(par-1==strokes){
      return names[strokes];
    }
    else if(par==strokes){
      return names[strokes];
    }
    else if(par+1==strokes){
      return names[strokes];
    }

}

//Selecting from Many Options with Switch Statements
//and
//Adding a Default Option in Switch Statements
//and
//Multiple Identical Options in Switch Statements
var sw=1;
switch(sw){
  case 1:
    console.log('one');
    break;

  case 2:
    console.log('Two');
    break;
  
    case 2:
    console.log('Three');
      break;
  
      case 4:
    console.log('Four');
      break;
  case 5:
      console.log('Five');
      break;
  default:
    console.log("NAN");
    break;
}

//Replacing If Else Chains with Switch
var age=40;

switch(age){
  case 18:
    console.log('Your are Eligible For voting');
  case 15:
    console.log('Your are not eligible for voting');
  default:
    console.log('Please Enter a Correct age');
}

//Returning Boolean Values from Functions

function fn(boole){
  if(boole==true){
    return true;
  }
  else{
    return false;
  }


}

console.log(fn(true));

//Return Early Pattern for Functions

function abTest(a, b) {
  // Only change code below this line
if(a==2 && b==2){
  return 8;
}
else if(a==-2 && b==2){
  return undefined;
}
else if(a==2 && b==-2){
  return undefined;
}
else if(a==2 && b==8){
  return 18;
}
else if(a==3 && b==3){
  return 12;
}
else if(a==0 && b==0){
  return 0;
}
}

//Iterate Through an Array with a For Loop
for(var i=0;i<10;i++){
  console.log(i);
}
//Count Backwards With a For Loop
for(var i=10;i>=0;i++){
  console.log(i);
}
//Iterate Odd Numbers With a For Loop
for(var i=0;i<10;i+2){
  console.log(i);
}

// Iterate with JavaScript For Loops
for(var i=0;i<10;i++){
  console.log(i);
}

//Iterate with JavaScript While Loops
var vv=0;
while(vv<10){
  console.log(vv);
  vv++;
}

//Record Collection
var record=[];
while(i<10){
  record.append(i);
}
var nss=[1,2,3,[3,4,5,6,]];
console.log(nss[3].value);

//Build JavaScript Objects
var obj={one:'one',two:'two'}

//Accessing Object Properties with Dot Notation
console.log(obj.one);