// Function 1: Reverse String
function reverseString() {
    const input = document.getElementById('stringInput').value;
    const resultDiv = document.getElementById('reverseResult');
    
    if (input.trim() === '') {
        resultDiv.textContent = 'Please enter a string!';
        resultDiv.style.color = '#e74c3c';
        return;
    }
    
    const reversed = reverse(input);
    resultDiv.textContent = `Reversed: ${reversed}`;
    resultDiv.style.color = '#27ae60';
}

function reverse(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Function 2: Check Palindrome
function checkPalindrome() {
    const input = document.getElementById('palindromeInput').value;
    const resultDiv = document.getElementById('palindromeResult');
    
    if (input.trim() === '') {
        resultDiv.textContent = 'Please enter a series of numbers!';
        resultDiv.style.color = '#e74c3c';
        return;
    }
    
    const isPalin = isPalindrome(input);
    if (isPalin) {
        resultDiv.textContent = `"${input}" is a palindrome! ✓`;
        resultDiv.style.color = '#27ae60';
    } else {
        resultDiv.textContent = `"${input}" is NOT a palindrome.`;
        resultDiv.style.color = '#e74c3c';
    }
}

function isPalindrome(str) {
    const cleaned = str.replace(/\s/g, '');
    const reversed = reverse(cleaned);
    return cleaned === reversed;
}

// Function 3: Calculate Tip
function calculateTip() {
    const subtotal = parseFloat(document.getElementById('subtotalInput').value);
    const tipPercent = parseFloat(document.getElementById('tipPercentage').value);
    const resultDiv = document.getElementById('tipResult');
    
    if (isNaN(subtotal) || isNaN(tipPercent)) {
        resultDiv.textContent = 'Please enter valid numbers!';
        resultDiv.style.color = '#e74c3c';
        return;
    }
    
    if (subtotal < 0 || tipPercent < 0) {
        resultDiv.textContent = 'Please enter positive values!';
        resultDiv.style.color = '#e74c3c';
        return;
    }
    
    const total = calculateTotal(subtotal, tipPercent);
    const tipAmount = subtotal * (tipPercent / 100);
    
    resultDiv.innerHTML = `
        Tip Amount: $${tipAmount.toFixed(2)}<br>
        Total to Pay: $${total.toFixed(2)}
    `;
    resultDiv.style.color = '#27ae60';
}

function calculateTotal(subtotal, tipPercent) {
    const tipAmount = subtotal * (tipPercent / 100);
    return subtotal + tipAmount;
}
