document.addEventListener("DOMContentLoaded", function() {
    const texts = document.querySelectorAll('.title-home, .titletext-home');

    function fadeInText(text) {
        text.style.opacity = '0';
        text.style.transform = 'translateX(100px)';
        text.style.transition = 'opacity 0.5s ease-in, transform 0.5s ease-in';

        setTimeout(() => {
            text.style.opacity = '1';
            text.style.transform = 'translateX(0)';
        }, 100);
    }

    texts.forEach(text => {
        fadeInText(text);
    });
});