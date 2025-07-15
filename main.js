// Dramatic text reveal
const dramaticText = [
    "I know you're shocked...",
    "What is this all about?",
    "Is this real? Is this for me?",
    "Yes, Amanda, this is for you!"
];

let idx = 0;
function showDramaticText() {
    if (idx < dramaticText.length) {
        document.getElementById('dramatic-text').textContent = dramaticText[idx];
        idx++;
        setTimeout(showDramaticText, 1600);
    } else {
        document.getElementById('shock-question').classList.remove('hidden');
    }
}
window.onload = showDramaticText;

function goToNextPage() {
    window.location.href = 'main-letter.html';
}

function leavePage() {
    window.location.href = 'leave.html';
}
