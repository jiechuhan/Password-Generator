var spec = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var low = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var up = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U"," V", "W", "X", "Y", "Z"];

// to assign usable variable
var haveSpec;
var haveNum;
var haveLow;
var haveUp;
var length;

// generate a bigger character pool
var bigpool = []

// generate a password
var password = []

// make generater can be clicked
document.getElementById("generate").addEventListener("click", myClick);


// click to generate a password
function myClick() {
  document.getElementById("generate");

  // select the length
  length = prompt("how many characters do you want, you would like to choose between 8 and 128?");

  if (length < 8) {
    alert("You need at least select 8 characters.");
    return;
  } else if (length >128) {
      alert("You need at most select 128 characters.");
      return;
    } else {
     haveSpec = confirm("do you want specical characters?");
     haveNum = confirm("do you want numbers?");
     haveLow = confirm("do you want lowercase letters?");
     haveUp = confirm("do you want uppercase letters?");
        
        // make sure at least one type of characters are existed
        if (haveSpec === false && haveNum === false && haveLow === false && haveUp === false) {
            alert("You must select one type of characters.");
            return;
        } else {
            generateRandom();
            }
    }; 
};


// generate a big pool for potential passwords based on user's selction of different characters
function generateRandom() {
    for (i=0; i<spec.length; i++) {
        if (haveSpec === true) {
            let cspec = spec[Math.floor(Math.random()*spec.length)]
            bigpool.push(cspec)
        };
    };
    
    for (i=0; i<num.length; i++) {
        if (haveNum === true) {
            let cnum = num[Math.floor(Math.random()*num.length)]
            bigpool.push(cnum)
        };
    };

    for (i=0; i<low.length; i++) {
        if (haveLow === true) {
            let clow = low[Math.floor(Math.random()*low.length)]
            bigpool.push(clow)
        };
    };

    for (i=0; i<up.length; i++) {
        if (haveUp === true) {
            let cup = up[Math.floor(Math.random()*up.length)]
            bigpool.push(cup)
        };
    };

    generatePassword()
};


// generate final password from the big pool
function generatePassword() {
    for (j=0; j<length; j++) {
        let passwords = bigpool[Math.floor(Math.random()*bigpool.length)]
        password.push(passwords)
        document.getElementById("password").innerHTML = password.join('')
    };
};


// click to copy
document.getElementById("copy").addEventListener("click", myCopy);

function myCopy() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Your password: " + copyText.value + " was copied to your clipboard");
};