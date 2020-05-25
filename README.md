# ChangeLetters

ChangeLetters allows you to ***type whatever combination of letters you want*** and output ***a new bunch of letters with the exact amount of characters, but with different letters***. 

**ChangeLetters** takes the letters of the alphabet typed and replace them for the next letter in the alphabet. If other characters like *symbols or numbers* are included in the characters typed these are ignored but they will be returned in the same place in the new set of characters. 

---

### ChangeLetters Algorithm

1. Replace every letter typed with the letter following it in the alphabet(ie.c becomes d, z becomes a).

2. Capitalize every vowel in this new set of characters(a, e, i, o, u).

3. Return this modified input.

***Examples:***
Input: "hello*3"
outputArray: Ifmmp*3
Input: "fun times!"
outputArray: gvO Ujnft!

### Code 

We have the function letterChanges(input) that takes the input parameter being passed and modify it using the algorithm explained **above**.  

```JavaScript
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
```
---
### Links

[changeLetters](https://luztherose.github.io/changeLetters/letterChanges.html "Links to changeLetters")


