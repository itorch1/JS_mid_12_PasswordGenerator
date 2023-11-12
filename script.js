const outputEl = document.getElementById('output').querySelector('div');

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const length = document.getElementById('length').value;
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;

    let output = '';

    const selector = [];
    if (uppercase)
        selector.push(getRandomUpper);
    if (lowercase)
        selector.push(getRandomLower);
    if (numbers)
        selector.push(getRandomNumber);
    if (symbols)
        selector.push(getRandomSymbol);
    
    for (let i=0; i<length; i++) {
        const char = selector[Math.floor(Math.random() * selector.length)]();
        output += char;
    }

    outputEl.innerText = output;
})

document.getElementById('copy').addEventListener('click', () => {
    if (outputEl.innerText == '')
        return;
    const outputText = outputEl.innerText;

    navigator.clipboard.writeText(outputEl.innerText);
    const output = document.getElementById('output');
    output.style.backgroundColor = 'white';
    output.style.color = '#13102f';
    outputEl.innerText = 'Copied to clipboard'
    setTimeout(() => {
        output.style.backgroundColor = '#13102f';
        output.style.color = '#fff';
        outputEl.innerText = outputText;
    }, 1000);
})

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}