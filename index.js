function calculateTax(amount) {
    return amount * 0.10;
}

function convertToUpperCase(text) {
    return text.toUpperCase();
}

function findMaximum(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

function isPalindrome(word) {
    const lowercaseWord = word.toLowerCase();
    const reversedWord = lowercaseWord.split("").reverse().join("");

    return lowercaseWord === reversedWord;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discount = originalPrice * (discountPercentage / 100);
    return originalPrice - discount;
}

module.exports = {
    calculateTax,
    convertToUpperCase,
    findMaximum,
    isPalindrome,
    calculateDiscountedPrice,
};