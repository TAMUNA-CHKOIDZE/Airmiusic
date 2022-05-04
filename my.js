// დაიწყო fourth section 
let faqs = document.querySelectorAll('.faq .faqDiv');
faqs.forEach(fa => {
    fa.onclick = () => {
        faqs.forEach(subFa => {subFa.classList.remove('active')});
        fa.classList.add('active');
    }
})

// დაიწყო fifth section
let images = [
    {
        photo: "./image/airpodsBlack.png"
    },
    {
        photo: "./image/airpodswhite.png"
    },
    {
        photo: "./image/airpodsRed.png"
    },
    {
        photo: "./image/airpodsBlue.jpg"
    }
]

let currentIndex = 0;

    setActiveBullets();
    next();

    
    function next(){
        let nextSlideIndex = currentIndex + 1;
        if(nextSlideIndex > images.length - 1){
            nextSlideIndex = 0;
        }
        setActiveSlide(nextSlideIndex);
    };
    
    function setActiveBullets(){
        let bullets = document.querySelectorAll('.bullets .bullet');
        for(let i = 0; i < bullets.length; i++){
            bullets[i].addEventListener('click', function(){
                setActiveSlide(i);
            });
        }
    };
    
    function setActiveSlide(newIndex){
        currentIndex = newIndex;
        let image = document.querySelector('.EARPONES');
        image.classList.add('volume');
        image.src = images[currentIndex].photo;

        setActiveBullets();
    };
