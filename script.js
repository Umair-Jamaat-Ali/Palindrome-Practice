//// Palindrome Checker: Create a program that takes a string input from the user
/// and checks if it is a palindrome (i.e., the string reads the same forwards and backwards).
//// The program should then display the result on the webpage.
/// Palindrome mein hum un string ko check krty hain jo word same trah prhy jaty hain... ex madam, 

function onPalindrome() {
    const inputString = document.getElementById("string");
   const string = inputString.value.toLowerCase();

  const reverseString = string.split("").reverse().join("");

   let result;

    if(string === reverseString){
        result = "This is Palindrome";
    }
    else{
        result = "This is not Palindrome";
    }

   const resultString = document.getElementById("result");
     resultString.textContent = result;

}