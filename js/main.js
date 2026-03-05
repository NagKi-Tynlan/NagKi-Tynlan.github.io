document.addEventListener("keydown", event => {
    console.log('Key down= ${event.key}');

    // Play audio on first key press
    const audio = document.getElementById('anthem105');
    if (audio && audio.paused) {
        audio.play().catch(e => console.log('Audio play failed:', e));
    }

    // Check if E key is pressed
    if (event.key === 'e' || event.key === 'E') {
        triggerFlashAndNavigate();
    }
});

document.addEventListener("keyup", event => {
    console.log('Key up= ${event.key}');
});

function triggerFlashAndNavigate() {
    const flashOverlay = document.getElementById('flashOverlay');
    
    // Add the active class to trigger the animation
    flashOverlay.classList.add('active');
    
    // After the animation completes (2 seconds), navigate to home page
    setTimeout(() => {
        window.location.href = 'home.html';
    }, 2000);
}


