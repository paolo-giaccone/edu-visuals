// Select the button and message paragraph from the HTML
const button = document.getElementById('clickBtn');
const message = document.getElementById('message');

let clickCount = 0;

// Add an event listener for when the button is clicked
button.addEventListener('click', function() {
    clickCount++;
    message.textContent = `Button clicked ${clickCount} times! 🎉`;
});
