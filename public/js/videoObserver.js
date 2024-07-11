document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('bgVideo');
    const placeholder = document.getElementById('bgPlaceholder');
    video.addEventListener('canplaythrough', function() {
        video.style.opacity = '1';
        // placeholder.style.opacity = '0';
        setTimeout(() => {
        placeholder.style.visibility='hidden'
        }, 1000); // Matches the transition duration
    }, false);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY >= window.innerHeight) {
            video.style.position = 'fixed';
        } else {
            video.style.position = 'absolute';
        }
    });
});