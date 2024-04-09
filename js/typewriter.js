const textElement = document.getElementById('typewriterText');
const staticTextElement = document.querySelector('.static-text');
const words = ["de Pedreiro Geral.", "de azulejista, acabamento e alvenaria.", "p/ residências, empresas e condomínios."];

let wordIndex = 0;
let letterIndex = 0;
let direction = 1; 

function type() {
    if (letterIndex < words[wordIndex].length && direction === 1) {
        textElement.innerHTML += words[wordIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(type, 100); 
    } else {
        direction = -1; 
        setTimeout(erase, 1000); 
    }
}

function erase() {
    if (letterIndex > 0 && direction === -1) {
        textElement.innerHTML = words[wordIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(erase, 50); 
    } else {
        direction = 1; 
        wordIndex++;
        if (wordIndex >= words.length) {
            wordIndex = 0; 
        }
        setTimeout(type, 500); 
    }
}


staticTextElement.style.display = 'inline';
staticTextElement.style.opacity = '1';

setTimeout(() => {
    type(); 
}, 2000); 
