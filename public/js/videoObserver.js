document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('bgVideo');
    const placeholder = document.getElementById('bgPlaceholder');
    video.addEventListener('canplaythrough', function() {
        video.style.opacity = '1';
    }, false);
});``