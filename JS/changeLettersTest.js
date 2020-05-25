// The console.assert() method writes a message to the console, but only if an expression evaluates to false.

function testRemplaceLetterByNextLetter() {
    let outputArray = letterChanges("hello");
    console.assert("Ifmmp" == outputArray, "testRemplaceLetterByNextLetter failed");
}

function testShouldNotReplaceSpecialCharacters() {
    let outputArray = letterChanges("hello*3");
    console.assert("Ifmmp*3" == outputArray, "testShouldNotReplaceSpecialCharacters failed");
}

function testChangeTheCharacterZForA() {
    let outputArray = letterChanges("helloz");
    console.assert("IfmmpA" == outputArray, "testChangeTheCharacterZForA failed");
}

function testCapitalizeVowels() {
    let outputArray = letterChanges("daddy");
    console.assert("EbEEz" == outputArray, "testCapitalizeVowels failed");
}

function runAllTests() {
    testRemplaceLetterByNextLetter();
    testShouldNotReplaceSpecialCharacters();
    testChangeTheCharacterZForA();
    testCapitalizeVowels()
}

runAllTests();