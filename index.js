function calculateTax(amount) {
    let tax = amount * 0.10;
    return tax;
}
console.log(calculateTax(100))

function convertToUpperCase(text) {
    return text.toUpperCase();
}
console.log(convertToUpperCase("hello world"));

function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else{
        return num2;
    }
}
console.log(findMaximum(20, 68));

function isPalindr(word) {
    const reversedWord = word.split(' ').reverse().join(' ');
    return word === reversedWord;
}
console.log(isPalindr("radar"));
console.log(isPalindr("hello"))
console.log(isPalindr("racecar"));

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    let discount = originalPrice * (discountPercentage / 100)
    let finalPrice = originalPrice - discount;
    return finalPrice;
}
let result = calculateDiscountedPrice(100, 15)
console.log(result)


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindr}