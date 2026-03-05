document.addEventListener("keydown", event => {
    console.log('Key down= ${event.key}');

    // Play audio on first key press
    const audio = document.getElementById('anthem105');
    if (audio && audio.paused) {
        audio.play().catch(e => console.log('Audio play failed:', e));
    }
});
document.addEventListener("keyup", event => {
    console.log('Key up= ${event.key}');
});