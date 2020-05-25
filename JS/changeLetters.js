/*Letter Changes

        Have the function letterChanges(input) take the input parameter being passed and modify it using the following algorithm.Replace every letter in the input with the letter following it in the alphabet(ie.c becomes d, z becomes a).Then capitalize every vowel in this new input(a, e, i, o, u) and finally return this modified input.
            Examples
        Input: "hello*3"
        outputArray: Ifmmp*3
        Input: "fun times!"
        outputArray: gvO Ujnft!*/

let inputShowNewLetters = document.getElementById("lettersChanged");
let buttonTranslate = document.querySelector("#changeLetters");
let cleanButton = document.querySelector("#cleanButton");

buttonTranslate.addEventListener("click", () => {
    let inputText = document.getElementById("typeText").value;
    inputShowNewLetters.value = letterChanges(inputText);
});

cleanButton.addEventListener("click", () => {
    cleanInputField();
});

function letterChanges(input) {
    let alphabet = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];
    let output = "";
    let vowels = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < input.length; i++) {

        let characterFound = false
        for (let j = 0; j < alphabet.length; j++) {
            if (input[i].toLowerCase() == "z") {
                output += "a";
                characterFound = true;
                break;
            }else {
                if (input[i].toLowerCase() == alphabet[j].toLowerCase()) {
                    output += alphabet[j + 1];
                    characterFound = true;
                }
            }
        }
        if(!characterFound) {
            output += input[i];
        }
    }
    
    for (let x = 0; x < output.length; x++) {
        for (let k = 0; k < vowels.length; k++) {
            if (output[x].toLowerCase() == vowels[k].toLowerCase()) {
                output = output.replace(output[x], vowels[k].toUpperCase());
            }
        }
    }
    return output
}

function cleanInputField() {
    let inputText = document.getElementById("typeText");
    inputText.value = "";
    inputShowNewLetters.value = "";
    location.reload();
}