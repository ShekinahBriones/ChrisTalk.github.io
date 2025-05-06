function showThankYouMessage() {
    // Show the thank you message
    document.getElementById('thank-you-message').style.display = 'block';
}

// Event listener to check for Enter key press
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        showThankYouMessage();
    }
});