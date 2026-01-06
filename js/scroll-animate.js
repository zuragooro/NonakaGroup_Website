const targets = document.querySelectorAll('.fadein');

const observer= new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('is-show');
            observer.unobserve(entry.target);
        }
    });
});

targets.forEach(target => observer.observe(target));