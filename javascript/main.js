
const images = document.querySelectorAll('.icons-header img');

function triggerAnimation(entries){
    entries.forEach(entry =>{
        const image = entry.target;

        image.classList.toggle('unset', entry.isIntersecting);
    });
}

const options ={
    root: null,
    rootMargin: "0px",
    threshold: 1
}
const observer = new IntersectionObserver(triggerAnimation, options);

images.forEach(image =>{
    observer.observe(image);
});

