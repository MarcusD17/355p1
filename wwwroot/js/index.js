


// Add a class to the animated-text elements when they come into view
const animatedTextElements = document.querySelectorAll('.animated-text');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('play-animation');
            observer.unobserve(entry.target);
        }
    });
});

animatedTextElements.forEach((element) => {
    observer.observe(element);
});