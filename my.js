// დაიწყო fourth section 
let faqs = document.querySelectorAll('.faq .faqDiv');
faqs.forEach(fa => {
    fa.onclick = () => {
        faqs.forEach(subFa => {subFa.classList.remove('active')});
        fa.classList.add('active');
    }
})

// დაიწყო fifth section
let userRecomendation = [
    {
        photo: "./image/airpodsBlack.png"
    },
    {
        photo: "./image/airpodswhite.png"
    },
    {
        photo: "./image/airpods red.png"
    },
    {
        photo: "./image/airpods blue.jpg"
    }
]


let currentIndex = 0;
    // bullets();
    setActiveBullets();
    next();
    
    function next(){
        let nextSlideIndex = currentIndex + 1;
        
        if(nextSlideIndex > userRecomendation.length - 1){
            nextSlideIndex = 0;
        }
        setActiveSlide(nextSlideIndex);
    };
    
    
    function setActiveBullets(){
        let bullet = document.getElementById('bullet');
        let buttons = document.querySelectorAll('.color bullet');
        for(let i = 0; i < buttons.length; i++){
            buttons[i].classList.remove('active');
            buttons[i].addEventListener('click', function(){
                setActiveSlide(i);
            });
           
        }
        buttons[currentIndex].classList.add('active');
    };
    
    function setActiveSlide(newIndex){
        currentIndex = newIndex;
        let image = document.querySelector('.airpods');
        image.src = userRecomendation[currentIndex].photo;

        setActiveBullets();
    };